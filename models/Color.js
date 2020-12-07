module.exports = function (sequelize, DataTypes) {
  const Color = sequelize.define('Color', {
    color: {
      type: DataTypes.STRING
    }
  });

  Color.associate = function (models) {
    Color.belongsTo(models.User);
  };

  return Color;
};
