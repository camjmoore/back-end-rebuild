const express = require('express')

const Categories = require('./model')

const router = express.Router();

/** GET REQUEST */
router.get('/', (req, res) => {
  Categories.getCategories()
  .then(cats => {
    if (cats) {
      res.status(200).json(cats);
    } else {
      res.status(400).json({ message: "The categories could not be retrieved" })
    }
  })
  .catch(error => {
    res.status(500).json({ error: "There was an error retrieving the categories" })
  })
})

/** POST REQUEST */
router.post('/', (req, res) => {
  const newCat = req.body

  Categories.addCategory(newCat)
    .then(cat => {
      res.status(201).json({ success: "category created", id: cat[0], ...newCat })
    })
    .catch(error => {
      res.status(400).json({ error: "The category could not be created" })
    })
})

/** PUT REQUEST */
router.put('/:id', (req, res) => {
  const changes = req.body;
  const id = req.params.id;

  Categories.editCategories(changes, id)
    .then(updated => {
      if (updated) {
        res.status(200).json({ success: "Category was succcessfully updated", ...changes })
      } else {
        res.status(500).json({ message: "There was an error updating the category"})
      }
    })
    .catch(error => {
      res.status(400).json({ error: "The changes could not be saved"})
    })
})

/** DELETE REQUEST */
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Categories.deleteCategory(id)
    .then(del => {
      if (del) {
        res.status(200).json({ success: "Category was successfully deleted" })
      } else {
        res.status(500).json({ error: "There was an error deleting the category" })
      }
    })
    .catch(err => {
      res.status(400).json({ message: "The category could not be deleted" })
    })
})

module.exports = router