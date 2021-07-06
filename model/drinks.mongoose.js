'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinksSchema = new Schema({
 
    strDrink: { type: String },
    strDrinkThumb: {type: String},
 
});

// This creates our model from the above schema, using mongoose's model method
const DrinksData = mongoose.model("DrinksData", DrinksSchema);

// Export the Article model
module.exports = DrinksData;