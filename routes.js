const db = require('./models');
module.exports = function (app) {
  app.get('/api/users', async function (req, res) {
    res.json(await db.User.findAll());
  });

  app.get('/api/colors', async function (req, res) {
    res.json(await db.Color.findAll());
  });

  app.get('/api/posts', async function (req, res) {
    res.json(await db.Post.findAll());
  });

  app.get('/api/tokens', async function (req, res) {
    res.json(await db.Token.findAll());
  });

  app.get('/api/userspostsjoint', async function (req, res) {
    res.json(await db.User.findAll({ include: db.Post }));
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
    <a href="/api/userspostsjoint">see users posts joint data</a>
    <br />
    `)
    );
  });

  app.get('*', function (req, res) {
    res.redirect('/');
  });
};
