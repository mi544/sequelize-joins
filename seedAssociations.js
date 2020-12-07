const db = require('./models');
(async () => {
  await db.sequelize.sync({ force: false });

  // adding associations

  // one to many relationship
  // finding a user (instance)
  const UserJohn = await db.User.findOne({
    where: {
      name: 'John'
    }
  });

  // finding a token (instance)
  const FirstToken = await db.Token.findOne({
    where: {
      token: 'jy43232tyt'
    }
  });

  // adding the association
  await UserJohn.addToken(FirstToken);

  // one to one relationship
  // finding a color (instance)
  const GreenColor = await db.Color.findOne({
    where: {
      color: 'Green'
    }
  });

  // adding the association
  await UserJohn.setColor(GreenColor);

  // one to many relationship
  // finding a post (instance)
  const GreatPost = await db.Post.findOne({
    where: {
      title: 'Awesome post about Sequelize joins!'
    }
  });
  await UserJohn.addPost(GreatPost);

  // finding a different user (instance)
  const UserBob = await db.User.findOne({
    where: {
      name: 'Bob'
    }
  });

  // adding the other way around
  await GreatPost.addUser(UserBob);

  console.log('Associations seeded successfully!');
  process.exit(0);
})();
