const express = require('express');
const morgan = require('morgan');
const db = require('./models');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });
});
