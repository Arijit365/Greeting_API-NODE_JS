const moongoose = require('mongoose')
const UserDetails = new moongoose.Schema({
       first_name:{
           type: String,
           default:null
       },
       last_name:{
           type: String,
           default:null
       },
       email:{
           type: String,
           unique:true
       },
       password:{
           type:String,
           unique:true
       },
       tokken:{
           type:String
       }
});
module.exports = moongoose.model("user" , UserDetails);