const express = require('express');
const mongoose = require('mongoose');
const drinkController = require('./controllers/drinkController');

const app = express();
const PORT = 3000;

const mongoURI = 'mongodb://localhost/coffee';
mongoose.connect(mongoURI);

/**
 * ════════ TODO ════════
 * [] Serve static files (html, css)
 * [] Handle 404s
 * [] More robust error handling
 *
 */

// Handle connections to '/' endpoint to load drinks.
app.get('/drinks', drinkController.getDrinks, (_req, res) => {
  res.status(200).send(res.locals.drinks);
});

app.post('/drinks', drinkController.createDrink, (_req, res) => {
  res.status(200).send(res.locals.createdDrink);
});

// Global error handling
app.use((err, _req, res) => {
  console.log(err);
  res.status(500).send(err);
});

console.log(`Listening on ${PORT}...`);
app.listen(PORT);
