require('dotenv').config();
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema.js');
const ConnectDB= require('./db.js');


const app = express(); 
app.use('/api', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

ConnectDB().then(()=>{
    app.listen(process.env.PORT, () => {
      console.log("server started on port 8000");
    });
  }).catch(error => {
    console.error('Database connection failed:', error);
  });
