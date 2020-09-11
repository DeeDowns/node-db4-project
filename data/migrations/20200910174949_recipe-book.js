
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', table => {
        table.increments()
        table.string('recipe_name', 255)
        .notNullable()
        .index()
        .unique()
    })
    .createTable('recipe_steps', table => {
        table.increments()
        table.integer('recipe_id') 
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        table.integer('step_number')
        .notNullable()
        .index()
        table.string('instructions')
        .notNullable()
        .index()    
    })
    .createTable('ingredients', table => {
        table.increments()
        table.string('ingredient_name', 255)
        .notNullable()
        .index()
        table.string('quantity', 255)
        .notNullable()
        .index()    
    })
    .createTable('recipe_ingredients', table => {
        table.increments()
        table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipes.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredients.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')  
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipe_steps')
  .dropTableIfExists('recipes')
};
