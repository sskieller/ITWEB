const mongoose = require('mongoose');

// Allows building a schema object with the same parameters
const subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
  });
  // Now you need to subscribe to this schema in your DB
  module.exports = mongoose.model("Subscriber", subscriberSchema);