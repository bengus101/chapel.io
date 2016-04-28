'use strict';
module.exports = function(sequelize, DataTypes) {
  var comment = sequelize.define('comment', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER, 
    confessionId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.confession.belongsTo(models.user);
        models.comment.belongsTo(models.confession);
      }
    }
  });
  return comment;
};