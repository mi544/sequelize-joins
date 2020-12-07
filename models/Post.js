module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    }
  });

  Post.associate = function (models) {
    Post.belongsToMany(models.User, { through: 'PostsUsers' });
  };

  return Post;
};
