const express = require('express');

const Users = require('./model');

const bcrypt = require('bcryptjs');

const jwt = require('../../utils/generateToken.js');

const router = express.Router();

/** GET REQUEST */
router.get('/', (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error =>
      res.status(400).json(error)
    )
})

/** POST REQUEST TO REGISTER */
router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;
  const token = jwt.generateToken(user);
  
  Users.register(user)
    .then(newUser => {
      res.status(201).json({
        id: newUser[0],
        username: user.user_name,
        token
      })
    })
    .catch(error =>
      res.status(400).json({ msg: error.message })
    )
})

/** POST REQUEST */
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = jwt.generateToken(user);
                res.status(201).json({ success: 'You have logged in.', id: user.id, username: user.username, token });
            }
            else {
                res.status(401).json({ error: 'Incorrect username or password. Try again.' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Something went wrong.' });
        })
});

/** DELETE REQUEST */
router.delete('/:id', (req, res) => {
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

