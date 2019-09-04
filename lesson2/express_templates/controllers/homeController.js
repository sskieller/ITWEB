'use strict'

// Route parameters
exports.sendVegetable = (res, req) => {
    let veg = req.params.vegetable;
    res.send(`This is a page for ${veg}`);
};

exports.homePage = (res,req) => {
    res.send("This is the home page god dammit ");
};