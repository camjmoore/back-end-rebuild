const express = require('express')

const Recipes = require('./model')

const router = express.Router();

/** GET REQUEST */
router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(error => {
      res.status(500).json({ error: "The recipes could not be retrieved" })
    })
})

/** PUT REQUEST */
router.put('/:id', (req, res) => {
  const changes = req.body;
  const id = req.params.id;

  Recipes.editRecipe(changes, id)
    .then(recipe => {
      if (recipe) {
        res.status(200).json({ success: "The recipe was successfully updated", ...recipe});
      } else {
        res.status(500).json({ error: "There was an error updating the recipe" })
      }
    })
    .catch(error => {
      res.status(404).json({ message: "Could not find a recipe by that id" });
    });
});

/** POST REQUEST */
router.post('/', (req, res) => {
  const recipe = req.body

  Recipes.addRecipe(recipe)
    .then(recipes => {
      if (recipes) {
        res.status(200).json({ message: "new recipe created", recipe_id: recipes[0], title: recipes[1]})
      } else {
        res.status(500).json({error: "there was an error creating the recipe"})
      }
    })
    .catch(error => {
      res.status(400).json({message: "the recipe could not be created" })
    })
})

/** DELETE REQUEST */
router.delete('/:id', (req, res) => {
  Recipes.deleteRecipe()
    .then(del => {
      if (del) {
        res.status(200).json({ success: "The recipe was successfully deleted" })
      } else {
        res.status(500).json({ message: "There was an error deleting the recipe" })
      }
    })
    .catch(error => {
      res.status(400).json({ message: "The recipe could not be deleted" })
    })
})

module.exports = router