require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/descriptions', (req, res) => {
  res.redirect('http://52.53.232.73:3003/descriptions')
});

app.get('/mensSizes', (req, res) => {
  res.redirect('http://52.53.232.73:3003/mensSizes')
});

app.get('/womensSizes', (req, res) => {
  res.redirect('http://52.53.232.73:3003/womensSizes')
});

app.get('/euSizes', (req, res) => {
  res.redirect('http://52.53.232.73:3003/euSizes')
});

app.get('/reviews', (req, res) => {
  res.redirect('http://13.57.29.73:3002/reviews')
});

app.get('/images', (req, res) => {
  res.redirect('http://54.193.109.243:3001/images')
})

app.get('/products', (req, res) => {
  res.redirect('http://54.193.109.243:3001/products')
})


app.listen(3333, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('listening on port 3333')
})


app.listen(3000, err => {
  if (err) {
    return console.log(err);
  }
  console.log('You are connected to the proxy on port 3000')
});

app.listen(3001, err => {
  if (err) {
    return console.log(err);
  }
  console.log('You are connected to the proxy on port 3001')
});

app.listen(3002, err => {
  if (err) {
    return console.log(err);
  }
  console.log('You are connected to the proxy on port 3002')
});

app.listen(3003, err => {
  if (err) {
    return console.log(err);
  }
  console.log('You are connected to the proxy on port 3003')
});