require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(3333, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('listening on port 3333')
})