
exports.up = function(knex) {
    return knex.schema
    .table('ingredients', table => {
        table.dropColumn('quantity')
    })
    .table('recipe_ingredients', table => {
        table.string('quantity', 255)
        .notNullable()
        .defaultTo('1')
        table.string('unit_of_measurement', 255)
        .notNullable()
        .index()
        .defaultTo('1')
    })
   
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
};
