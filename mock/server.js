const express = require('express');
const logger = require('./middleware/logger');
const CONFIG = require('./src/config');

const app = express();

const start = () => {
  app.use(function (req, res, next) {
    for (key in CONFIG.HEADER) {
      res.header(key, CONFIG.HEADER[key]);
    }
    next();
  });
  app.use((req, res, next) => {
    setTimeout(next, CONFIG.RESPONSE_LATENCY);
  });
  // app.use(logger(CONFIG.LOGGER_FORMAT));
  app.use(logger(CONFIG.LOGGER_FORMAT));
  const routes = require(CONFIG.ROUTE_PATH)(app, CONFIG.API_BASE_PATH);
  app.listen(CONFIG.PORT, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Listening at http://localhost:' + CONFIG.PORT + '\n');
  });
};

start();
