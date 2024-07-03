require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.DB_URI;

async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("DataBase Connected");
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = connect;