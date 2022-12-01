// const mongoose = require('mongoose');
import mongoose from 'mongoose';

// Import of the model Recipe from './models/Recipe.model.js'
// const Recipe = require('./models/Recipe.model');
import Recipe from './models/Recipe.model.js';
// Import of the data from './data.json'
// const data = require('./data');
import data from './data.json' assert {type: 'json'};

const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    
    // Iteration 2
    // Recipe.create(data[0])
    // .then( (response) => console.log(response.title) )
    // .catch( (error) =>console.log(error));
    
    // Iteration 3
    Recipe.insertMany(data)
    .then( (docs) => {
      docs.forEach((doc)=>console.log(doc.title))
    })
    .catch( error => {
      console.error(error)
    }) 
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
