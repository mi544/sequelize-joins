require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DEVUSERNAME,
    password: process.env.DEVPASSWORD,
    database: process.env.DEVDB,
    host: process.env.DEVHOST,
    port: process.env.DEVPORT,
    dialect: 'mysql'
  },
  test: {
    username: process.env.TESTUSERNAME,
    password: process.env.TESTPASSWORD,
    database: process.env.TESTDB,
    host: process.env.TESTHOST,
    port: process.env.TESTPORT,
    dialect: 'mysql'
  },
  production: {
    username: process.env.PRODUSERNAME,
    password: process.env.PRODPASSWORD,
    database: process.env.PRODDB,
    host: process.env.PRODHOST,
    port: process.env.PRODPORT,
    dialect: 'mysql'
  }
};
