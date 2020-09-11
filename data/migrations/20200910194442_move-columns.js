
exports.up = function(knex) {
    return knex.schema
    .table('ingredients', table => {
        table.dropColumn('quantity')
    })
    .table('recipe_ingredients', table => {
        table.integer('quantity')
        .unsigned()
        .notNullable()
        table.string('unit_of_measurement', 255)
        .notNullable()
        .index()
    })
   
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
};
