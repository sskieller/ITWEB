'use strict'

// New split up logic for GET home page
module.exports.index = function (req, res) {
    res.render('index', {
        title: 'Express'
    });
};