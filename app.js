require('dotenv').config()
const bcrypt = require('bcryptjs'); // use for encrypt user password
const jwt = require('jsonwebtoken'); // for create tokken 
const BodyParser = require('body-parser')
const fs  = require('fs');
const express = require('express');
const app = express();
const PORT = 7000;
// autentication_ USER  details
const UserDetails = require('./models/user');
//  set // database
const connectDB = require('./db/connect');
//set routes
const ProductRouter = require('./routes/product');
// set up module for error handling 
const notFoundMiddlware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const { getTheConversation } = require('./controllers/product');
const user = require('./models/user');
// app.use(notFoundMiddlware);
app.use(errorHandlerMiddleware);

app.use(express.json());

app.get('/' ,(req , res)=>{
      res.send('<h1>Greeting Api</h1> <a href="Greeting Strings"> Greeting Data </a>')
})

// get method 
app.get('/', (req , res) => res.send("api running..."));
app.get("/UserInformation", (req , res ) => {
    const UserInformation = [
        {
         name: "Arijit",
         id : 1,
         status:"Student",
         occupation:" software Developer"
        },
        {
        name: "Rahul",
         id : 2,
         status:"Student",
         occupation:"Data Scientist "
        },
        {
        name: "Rohan",
         id : 1,
         status:"Student",
         occupation:"Graphics Designer"
        }
    ];
    res.json(UserInformation);
});
// routes--> controllers
app.use('/api/v1/products', ProductRouter)
// setup MongodB
const start = async() =>{
    try{
        //Connnect DB

    }
    catch(error){
      console.log(error);
    }
}
start();
// read JSON file
app.get('/api/v1/Conversation' , function(res , req) {
    const data = require('./conversation.json')
})
app.use('/api/v1/conversation' , getTheConversation);
fs.readFile("./conversation.json", "utf-8" , (err , jsonstring)=> {
    if(err){
        console.log("file error " , err);
        return;
    }
    console.log(" file data" , jsonstring);
    
})
app.post("./registar" , async (req , res) => {
    const {first_name , last_name , email , password} = req.body;
    if(!(email && password)){
        res.status(401).send("All filled required");
    }
    const olduser = await user.findOne({email});
    if(user &&(await bcrypt.compare(email , user.email))){
    
    }
    // create tokken
    const token = jwt.sign(
      {user_id: user_id , email},
      process.env.TOKEN_KEY,
    {
        expiresIn:"2h",
    });
  user.token = token;
  res.status(401).json(user);
  res.status(400).send("invalid credentials!!!!")
})
app.post("./login" , async(req , res) => {
    //login 
    const {email , password} = req.body;
    if(!(email && password)){
        res.status(402).send("All filled required with proper details");
    }
      const OldUser = await user.findOne({email});
      if (user &&(await bcrypt.compare(password , user.password))){
      }
      // create token
      const token = jwt.sign(
          {user_id: user_id , email},
          process.env.TOKEN_KEY,
          {
              expiresIn: "2h",
          }
      );
      user.token = token;
      res.status(401).json(user);
      res.status(400).send("Invalid ceredentalis!!!");
});
app.listen(PORT, () => console.log(`web app is running on the port ${PORT}`))