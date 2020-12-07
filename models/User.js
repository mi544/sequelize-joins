module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Token);
    User.hasOne(models.Color);
  };

  return User;
};
