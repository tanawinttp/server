const mongoose = require("mongoose");

const populationSchema = mongoose.Schema({
  CountryName: String,
  Year: Number,
  Population: Number,
});

module.exports = mongoose.model("TestSGN", populationSchema);
