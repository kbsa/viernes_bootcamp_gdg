'use strict';
module.exports = (sequelize, DataTypes) => {
  var Evento = sequelize.define('Evento', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    direccion: DataTypes.STRING
  }, {});
  Evento.associate = function(models) {
    // associations can be defined here
  };
  return Evento;
};