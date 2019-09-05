const httpStatus = require('http-status-codes');

exports.pageNotFoundError = (req,res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

exports.internalServerError = (req,res) =>{
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Application not working`);
};