const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    // getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .select('ingredients.ingredient_name','recipe_ingredients.quantity', 'recipe_ingredients.unit_of_measurement' )
    .where('recipe_ingredients.recipe_id', recipe_id)

}