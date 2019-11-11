"use strict";

const weather = require('weather-js');

module.exports.getWeather = function getWeather(req, res, next) {
  // Code necessary to consume the weather API and respond
  weather.find({
    search: req.swagger.params.location.value,
    degreeType: req.swagger.params.unit.value
  }, (err, result) => {
    if (err) {
      return next(err.message);
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result[0] || {}, null, 2));
  });
};