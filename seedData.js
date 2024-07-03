const mongoose= require('mongoose');
var Weather = require('./model/weather.js');
const ConnectDB = require('./db.js');

const weather_data= [
    {
        place: "Delhi",
        latitude: 28.6139,
        longitude: 77.2088,
        temperature: 32, 
        description: "Sunny",
        icon: "hot_sun.png",
      },
      {
        place: "Moscow",
        latitude: 55.7558,
        longitude: 37.6173,
        temperature: 20, 
        description: "Partly cloudy",
        icon: "cloud_sun.png", 
      },
      {
        place: "Paris",
        latitude: 48.8566,
        longitude: 2.3522,
        temperature: 25, 
        description: "Clear skies",
        icon: "cloud.png", 
      },
      {
        place: "New York",
        latitude: 40.7128,
        longitude: -74.0059,
        temperature: 28,
        description: "Scattered clouds",
        icon: "winter.png", 
      },
      {
        place: "Sydney",
        latitude: -33.8688,
        longitude: 151.2093,
        temperature: 18,
        description: "Light rain",
        icon: "light_rain.png", 
      },
      {
        place: "Riyadh",
        latitude: 24.7742,
        longitude: 46.7388,
        temperature: 38, 
        description: "Hot",
        icon: "hot_sun.png", 
      },
];

function seedData(){
  ConnectDB()
  .then(()=>{
    console.log('deleted existing data');
    return Weather.deleteMany({});
  })
  .then(()=>{
    return Weather.insertMany(weather_data);
  }).then(()=>{
    console.log('Weather data updated successfully!');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
  });
}

seedData();