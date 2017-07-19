'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   return queryInterface.addColumn('Todos', 'completed', 
     {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Todos', 'completed', 
     {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    );
  }
};
