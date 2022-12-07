const express = require('express');
const mongoose = require('mongoose');
const drinkController = require('./controllers/drinkController');
const path = require('path');

const app = express();
const PORT = 3000;

const mongoURI = 'mongodb://localhost/coffee';
mongoose.connect(mongoURI);

/**
 * ════════ TODO ════════
 * [] Serve static files (html, css)
 * [] Handle 404s
 * [] More robust error handling
 * [] Coffee Types enum▬
 *
 */

// Parse the body of each request
app.use(express.json());

// Handle GET to '/drinks' endpoint to load drink list
app.get('/drinks', drinkController.getDrinks, (_req, res) => {
  return res.status(200).send(res.locals.drinks);
});

// Handle POST to '/drinks' to create drink in DB
app.post('/drinks', drinkController.createDrink, (_req, res) => {
  return res.status(200).send(res.locals.createdDrink);
});

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (_req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// 404 handling
app.use((_req, res) => {
  return res.status(404).send('Not found!');
});

// Global error handling
app.use((err, _req, res) => {
  console.log(err);
  return res.status(500).send(err);
});

console.log(`Listening on ${PORT}...`);
app.listen(PORT);
