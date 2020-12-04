const express = require("express");

const Instructions = require("./model");

const router = express.Router();

/** GET REQUEST */
router.get("/", (req, res) => {
  Instructions.getInstructions()
    .then((instructions) => {
      if (instructions) {
        res.status(200).json(instructions);
      } else {
        res
          .status(400)
          .json({ message: "The instructions could nto be retrieved" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "There was an error retrieving the instructions" });
    });
});

/** POST REQUEST */
router.post("/", (req, res) => {
  const newInstr = req.body;

  Instructions.addInstructions(newInstr)
    .then((instr) => {
      if (instr) {
        res.status(200).json({
          success: "The instructions were successfully added",
          id: instr[0],
          ...newInstr,
        });
      } else {
        res
          .status(400)
          .json({ message: "The instructions could not be added" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "There was an error adding the instructions" });
    });
});

/** PUT REQUEST */
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Instructions.editInstructions(changes, id)
    .then((updated) => {
      if (updated) {
        res.status(200).json({
          success: "The instructions were successfully updated",
          id: updated[0],
          ...changes,
        });
      } else {
        res
          .status(400)
          .json({ message: "The instructions could not be retrieved" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "There was an error retrieving the instructions" });
    });
});

/** DELETE REQUEST */
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Instructions.deleteInstructions(id)
    .then((del) => {
      res
        .status(200)
        .json({ success: "Instructions were successfully deleted" });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: "There was an error deleting the instructions" });
    });
});

module.exports = router;
