'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recordid: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gc_obo_nature_c: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gc_obo_gare_origine_r_name: {
        type: Sequelize.STRING
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      gc_obo_nom_recordtype_sc_c: {
        type: Sequelize.STRING
      },
      gc_obo_type_c: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gb_obo_gare_origine_r_code_uic_c: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Records');
  }
};