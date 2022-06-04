const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');

/* View engine config */
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.get('/', (req, res, next) => {
  res.render('index')
})

app.get('/books/:bookId', (req, res, next) => {
  const { bookId } = req.params;
  res.send(`<h1>You just searched:${bookId}</h1>`)
})

app.get('/search', (req, res, next) => {
  res.json(req.query);
})

app.post('/search', (req, res, next) => {
  res.json(req.body);
})

/* Connection */
app.listen(process.env.PORT, () => { console.log(`Connected to port ${process.env.PORT} 🛸`)})