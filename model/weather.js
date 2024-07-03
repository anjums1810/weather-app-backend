const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeatherSchema = new Schema({
  place: {
    type: String,
    required: true,
    unique: true, 
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String, 
  },
});

module.exports = mongoose.model('Weather', WeatherSchema);
