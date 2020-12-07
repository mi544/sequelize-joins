module.exports = function (app) {
  app.get('/api/users', function (req, res) {
    res.json({ status: 'hello world' });
  });

  app.get('/api/tokens', function (req, res) {
    res.json({ status: 'hello world' });
  });

  app.get('/api/posts', function (req, res) {
    res.json({ status: 'hello world' });
  });

  app.get('/api/userspostsjoint', function (req, res) {
    res.json({ status: 'hello world' });
  });

  app.get('/', function (req, res) {
    res.set('Content-Type', 'text/html').send(
      new Buffer.from(`
    <h2>Sequelize Joins</h2>
    <a href="/api/users">see users</a>
    <br />
    <a href="/api/tokens">see tokens</a>
    <br />
    <a href="/api/posts">see tokens</a>
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
