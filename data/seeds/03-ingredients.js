
exports.seed = function(knex) {
  const ingredients = [
    {//1
      ingredient_name: 'cooked macaroni'
    },
    {//2
      ingredient_name: 'tuna'
    },
    {//3
      ingredient_name: 'condensed cream of chicken soup'
    },
    {//4
      ingredient_name: 'shredded cheddar cheese'
    },

    {//5
      ingredient_name: 'self-rising flour'
    },
    {//6
      ingredient_name: 'whole-milk greek yogurt'
    },

    {//7
      ingredient_name: 'cubed butternut squash'
    },
    {//8
      ingredient_name: 'olive oil'
    },
    {//9
      ingredient_name: 'minced garlic'
    },
    {//10
      ingredient_name: 'salt'
    },
    {//11
      ingredient_name: 'pepper'
    },
  ]

  return knex('ingredients').insert(ingredients)
};
