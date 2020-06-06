const express = require('express')

const Ingredients = require('./model')

const router = express.Router();

/** GET REQUEST */
router.get('/', (req, res) => {
  Ingredients.getIngredients()
    .then(ingred => {
      if (ingred) {
        res.status(200).json(ingred)
      } else {
        res.status(400).json({ message: "The ingredients could not be retrieved" })
      }
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error retrieving the Ingredients"})
    })
})

/** POST REQUEST */
router.post('/', (req, res) => {
  const newIngred = req.body;

  Ingredients.addIngredient(newIngred)
    .then(ingred => {
      if (ingred) {
        res.status(200).json({ success: "The Ingredient was successfully added", id: ingred[0], ...newIngred })
      } else {
        res.status(400).json({ message: "The Ingredient could not be added" })
      }
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error adding the Ingredient" })
    })
})

/** PUT REQUEST */
router.put('/:id', (req, res) => {
  const changes = req.body;
  const id = req.params.id;

  Ingredients.editIngredient(changes, id)
    .then(updated => {
      if (updated) {
        res.status(200).json({ success: "Ingredient was successfully updated", id: updated[0], ...changes })
      } else {
        res.status(400).json({ message: "The Ingredient could not be updated" })
      }
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error retrieving the Ingredients" })
    })
})


/** DELETE REQUEST */
router.delete('/:id', (req, res) => {
  const id = req.params.id

  Ingredients.deleteIngredient(id)
    .then(del => {
      if (del) {
        res.status(200).json({ message: "Ingredient successfully deleted" })
      } else {
        res.status(400).json({ message: "The Ingredient could not be deleted" })
      }
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error deleting the Ingredient" })
    })
})

module.exports = router