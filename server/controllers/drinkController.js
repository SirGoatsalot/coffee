const Drink = require('../models/drinkModel');

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
drinkController.createDrink = (req, res, next) => {
  try {
    const { name, espresso_shots, ratio } = req.body;
    if (!name || !espresso_shots || !ratio)
      return next(
        'drinkController.createDrink: Incorrect body formatting, unable to add to DB.'
      );
  } catch (err) {
    return next(err);
  }
};

module.exports = drinkController;
