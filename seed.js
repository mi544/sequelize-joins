const db = require('./models');
(async () => {
  await db.sequelize.sync({ force: true });
  const users = [
    {
      name: 'John'
    },
    {
      name: 'Bob'
    }
  ];
  await db.User.bulkCreate(users);

  const colors = [
    {
      color: 'Red'
    },
    {
      color: 'Green'
    }
  ];
  await db.Color.bulkCreate(colors);

  const posts = [
    {
      title: 'Awesome post about Sequelize joins!',
      text: 'Those joins are really cool! And you can use them in JavaScript!',
      rating: 10
    }
  ];
  await db.Post.bulkCreate(posts);

  const tokens = [
    {
      token: 'jy43232tyt'
    },
    {
      token: 'we6or87li2'
    }
  ];
  await db.Token.bulkCreate(tokens);

  console.log('Success!');
  process.exit(0);
})();
