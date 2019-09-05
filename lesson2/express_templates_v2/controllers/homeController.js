'use strict'

// Route parameters
exports.sendVegetable = (res, req) => {
    let veg = req.params.vegetable;
    res.send(`This is a page for ${veg}`);
};

// This responds with a rendering of the view "index"
// Using ejs you dont need to specify file type nor path
// The best way to use the templates is to pass data from the
// controller to the views instead of directly in the views.
exports.respondWithName = (req,res) => {
    let paramsName = req.params.myName; // Extrudes the url parameter
    res.render("index", {name: paramsName}); // Renders index with var from url
};