'use strict';
module.exports = (sequelize, DataTypes) => {

  /************************* FICHIER AUTO-GENERE PAR SEQUELIZE LORS DE LA CREATION DE LA TABLE SUR LE TERMINAL *******************/

  /************************************* COMMANDE UTILISEE CREATION TABLE************************************
> sequelize model:create --attributes "recordid:string gc_obo_nature_c:string 
gc_obo_gare_origine_r_name:string date:date gc_obo_nom_recordtype_sc_c:string gc_obo_type_c:string 
gb_obo_gare_origine_r_code_uic_c:string" --name Records */

  /******** Définition de la table Records ********/
  const Records = sequelize.define('Records', {
    recordid: DataTypes.STRING,
    gc_obo_nature_c: DataTypes.STRING,
    gc_obo_gare_origine_r_name: DataTypes.STRING,
    date: DataTypes.DATE,
    gc_obo_nom_recordtype_sc_c: DataTypes.STRING,
    gc_obo_type_c: DataTypes.STRING,
    gc_obo_gare_origine_r_code_uic_c: DataTypes.STRING
  }, {});
  Records.associate = function (models) {
    // associations can be defined here
  };
  return Records;
};