const express = require('express');
const path = require('path');
const handlebars = require('./config/handlebars');
const routes = require('./routes');
const app = express();
app.use(express.urlencoded({ extended: false }));

const port = 3000;
// SET UP STATIC
app.use(express.static(path.resolve(__dirname, './public')));
// INITIALIZE VIEWS SETTINGS WITH HANDLEBARS
handlebars(app);
app.use(routes);

app.listen(
  port,
  console.log.bind(console, `Your server is active on port ${port}....`)
);
