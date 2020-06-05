const express = require('express')

const Categories = require('./model')

const router = express.Router();

/** GET REQUEST */
router.get('/', (req, res) => {
  Categories.getCategories()
  .then(cats => {
    res.status(200).json(cats);
  })
  .catch(error => {
    res.status(400).json({ error: "The categories could not be retrieved" })
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
    .then(cat => {
      res.status(200).json({ success: "Category was succcessfully updatede", ...changes })
    })
    .catch(error => {
      res.status(400).json({ error: "the changes could not be saved"})
    })
})

/** DELETE REQUEST */
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Categories.deleteCategory(id)
    .then(del => {
      res.status(200).json({ success: "Category was successfully deleted" })
    })
    .catch(err => {
      res.status(400).json({ error: "The category could not be deleted" })
    })
})

module.exports = router