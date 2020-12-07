const db = require('./models');
module.exports = function (app) {
  app.get('/api/users', async function (req, res) {
    res.json(await db.User.findAll({ include: [db.Token, db.Color, db.Post] }));
  });

  app.get('/api/colors', async function (req, res) {
    res.json(await db.Color.findAll({ include: db.User }));
  });

  app.get('/api/posts', async function (req, res) {
    res.json(await db.Post.findAll({ include: db.User }));
  });

  app.get('/api/tokens', async function (req, res) {
    res.json(await db.Token.findAll({ include: db.User }));
  });

  app.get('/', function (req, res) {
    res.set('Content-Type', 'text/html').send(
      new Buffer.from(`
    <h2>Sequelize Joins</h2>
    <a href="/api/users">see users</a>
    <br />
    <a href="/api/tokens">see tokens</a>
    <br />
    <a href="/api/posts">see posts</a>
    <br />
    <a href="/api/colors">see colors</a>
    <br />
    `)
    );
  });

  app.get('*', function (req, res) {
    res.redirect('/');
  });
};
