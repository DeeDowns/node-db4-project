const express = require('express')

const Recipes = require('./recipes-model')

const router = express.Router()


router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        console.log(recipes)
        res.status(200).json({ data: recipes })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})

router.get('/:id/shopping-list', (req, res) => {
    const { id } = req.params
    Recipes.getShoppingList(id)
    .then(list => {
        console.log(list)
        res.status(200).json({ data: list })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})


module.exports = router