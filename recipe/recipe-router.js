const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
  .then(recipes => {
    res.status(200).json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Recipes.getInstructions(id)
    .then(instructions => {
      if (instructions) {
        res.status(200).json(instructions);
      } else {
        res.status(404).json({ message: 'Could not find instructions with given recipe id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe instructions' });
    });
  });

  router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
  
    Recipes.getShoppingList(id)
    .then(shoppingList => {
      if (shoppingList) {
        res.status(200).json(shoppingList);
      } else {
        res.status(404).json({ message: 'Could not find shopping List with given recipe id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe instructions' });
    });
  });


module.exports = router;