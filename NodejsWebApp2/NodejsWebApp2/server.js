'use strict';

const cities = require("cities");
var myCity = cities.zip_lookup("10016");
console.log(myCity);


const additionModule = require("./addition");
console.log(additionModule.addNum(2, 3));

const another = require("./anotherfolder/anotherfile");
another;