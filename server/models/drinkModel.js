const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: String,
  espresso_shots: Number,
  ratio: {
    coffee: Number,
    milk: Number,
    water: Number,
    other: Number
  },
});

module.exports = mongoose.model('drink', drinkSchema);