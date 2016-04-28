'use strict';
module.exports = function(sequelize, DataTypes) {
  var confession = sequelize.define('confession', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.confession.belongsTo(models.user);
        models.confession.hasMany(models.comment);
      }
    }
  });
  return confession;
};