const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
     name:{
         type: String,
         required:[true ," please Enter your name"]
     },
     ID:{
       type: Number,
       required:[true , "please enter user ID"]
     }
});


module.exports = mongoose.model('Product' , ProductSchema);