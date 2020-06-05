const express = require('express')

const Users = require('./model')

const router = express.Router();

/** GET REQUEST */
router.get('/', (req, res) => {
  Users.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(error =>
      res.send(error)
    )
})

/** POST REQUEST */
router.post('/', (req, res) => {
  Users.register()
    .then(users => {
      res.json(users)
    })
    .catch(error =>
      res.send(error)
    )
})

/** DELETE REQUEST */
router.del('/:id', (req, res) => {
  const id = req.params.id;
  Users.deleteUser(id)
  .then(del => {
    res.status(200).json({ "success": `User ${id} has been successfully deleted` })
  })
  .catch(error =>
    res.status(400).json({ "error": `Unable to delete user ${id}` })
  )
})

module.exports = router

