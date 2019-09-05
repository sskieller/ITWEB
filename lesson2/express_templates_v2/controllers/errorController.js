"use strict"

const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => {
    console.error(`This is logError reporting back ${error}`); // Logging the error stack
    next(error); // Passes the error to the next middleware function
};

// Catch all Page not found 404
exports.respondNoResourceFound = (req,res) =>{
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | This page does not exist`);
}
// Catch all Error 500
exports.respondInternalError = (req,res) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    //res.sendFile(`./public/${errorCode}.html`, { root: "./" }); // Allows rendering a page without templating engine
    res.status(errorCode);
    res.send(`${errorCode} | Problems with application`);
}