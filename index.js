const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./server/routes/index')
require('dotenv').config();

app.use('/', routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on ${port}`));
