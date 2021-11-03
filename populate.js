require('dotenv').config()

const connectDB = require('./db/connect');
const Products = require('./models/product');

const jsonProducts = require('./conversation.json');
const product = require('./models/product');

const start = async () =>{
    try{
       await connectDB(process.env.Mongo_URI);
       console.log("Suceess!!!");

    }
    catch(error){
       console.log(error)
    }
}

start();