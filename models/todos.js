'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todos = sequelize.define('Todos', {
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Todos;
};