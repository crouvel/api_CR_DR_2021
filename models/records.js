'use strict';
module.exports = (sequelize, DataTypes) => {
  const Records = sequelize.define('Records', {
    recordid: DataTypes.STRING,
    gc_obo_nature_c: DataTypes.STRING,
    gc_obo_gare_origine_r_name: DataTypes.STRING,
    date: DataTypes.DATE,
    gc_obo_nom_recordtype_sc_c: DataTypes.STRING,
    gc_obo_type_c: DataTypes.STRING,
    gb_obo_gare_origine_r_code_uic_c: DataTypes.STRING
  }, {});
  Records.associate = function(models) {
    // associations can be defined here
  };
  return Records;
};