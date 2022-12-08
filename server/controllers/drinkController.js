const Drink = require('../models/drinkModel');
const fetch = require('node-fetch');

const drinkController = {};

/**
 * Middleware to get all Drinks from drinks DB
 *
 * @param {HTTP Request} - req
 * @param {HTTP Response} - res
 * @param {*} next
 * @returns
 */
drinkController.getDrinks = async (_req, res, next) => {
  try {
    const rawData = await Drink.find({});
    res.locals.drinks = rawData;
    return next();
  } catch (err) {
    return next(err);
  }
};

/**
 * Creates a new drink and adds it to the DB. Expects body formatting according to drinkModel.js
 *
 * @param {HTTP Request} req
 * @param {HTTP Response} res
 * @param {*} next
 * @returns
 */
drinkController.createDrink = async (req, res, next) => {
  try {
    const {
      name,
      useZeldaName,
      brewType,
      grind,
      gramsIn,
      gramsOut,
      brewTime,
      waterTemp,
      author,
    } = req.body;
    if (!name || !brewType)
      return next(
        'drinkController.createDrink: Incorrect body formatting, unable to add to DB.'
      );
    let zeldaName = '';
    if (useZeldaName) {
      const entryID = Math.floor(Math.random() * 390);
      const entry = await fetch(
        `https://botw-compendium.herokuapp.com/api/v2/entry/${entryID}`
      ).then((data) => data.json());
      console.log(entry);
      zeldaName = entry.data.name;
    }
    console.log('Zelda Name: ', zeldaName);
    const createdDrink = await Drink.create({
      name,
      zeldaName,
      brewType,
      grind,
      gramsIn,
      gramsOut,
      brewTime,
      waterTemp,
      author,
    });
    res.locals.createdDrink = createdDrink._doc;
    return next();
  } catch (err) {
    return next(err);
  }
};

drinkController.getDrink = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Drink.find({ _id: id });
    res.locals.foundDrink = await result[0]._doc;
    return next();
  } catch (err) {
    return next(err);
  }
};

drinkController.deleteDrink = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Drink.deleteOne({ _id: id });
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = drinkController;
