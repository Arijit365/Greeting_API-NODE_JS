const moongoose = require('mongoose')
const {Mongo_URI} = process.env;
const connectDB = (url) => {
    return moongoose.connect(Mongo_URI , {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connected succesfully!!!!")
    })
    .catch((error) =>{
        console.log("connection.. Failed... exit now!!");
        console.log(error);
        process.exit(1);

    });
}

module.exports = connectDB;