const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: { type: String, required: true },
  zeldaName: String,
  brewType: { type: String, required: true },
  grind: String,
  gramsIn: Number,
  gramsOut: Number,
  brewTime: String,
  waterTemp: Number,
  author: String,
});

module.exports = mongoose.model('drink', drinkSchema);
