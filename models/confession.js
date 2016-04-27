'use strict';
module.exports = function(sequelize, DataTypes) {
  var confession = sequelize.define('confession', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.tweet.belongsTo(models.user);
      }
    }
  });
  return confession;
};