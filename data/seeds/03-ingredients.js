
exports.seed = function(knex) {
  const ingredients = [
    {
      ingredient_name: 'cooked macaroni',
      quantity: '3 cups'
    },
    {
      ingredient_name: 'tuna',
      quantity: '5 oz'
    },
    {
      ingredient_name: 'condensed cream of chicken soup',
      quantity: '10.75 oz'
    },
    {
      ingredient_name: 'shredded cheddar cheese',
      quantity: '1 cup'
    },

    {
      ingredient_name: 'self-rising flour',
      quantity: '1 1/4 cups'
    },
    {
      ingredient_name: 'whole-milk greek yogurt',
      quantity: '1 cup'
    },
    
    {
      ingredient_name: 'cubed butternut squash',
      quantity: '1'
    },
    {
      ingredient_name: 'olive oil',
      quantity: '2 tablespoons'
    },
    {
      ingredient_name: 'minced garlic',
      quantity: '2 cloves'
    },
    {
      ingredient_name: 'salt',
      quantity: '1 pinch'
    },
    {
      ingredient_name: 'pepper',
      quantity: '1 pinch'
    },
  ]

  return knex('ingredients').insert(ingredients)
};
