const { Router } = require("express");

const errorHandlerMiddleware = async(err , res , req , next) => {
    console.log(err);
     res.status(404).json({msg: 'Something went wrong!'})
}

module.exports = errorHandlerMiddleware;
