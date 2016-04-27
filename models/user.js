'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.user.hasMany(models.confession);      }
    }
  });
  return user;
};