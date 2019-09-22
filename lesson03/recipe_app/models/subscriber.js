const mongoose = require('mongoose'),
  { Schema } = mongoose,
  subscriberSchema = new Schema(
    {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    zipCode: {
      type: Number,
      min: [1000, "ZipCode too short"],
      max: 9999
    },
    // The brackets signify an array of courses. Remove to allow only one.
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  {
    timestamps: true
  });

// Has to use 'function() {}' for these 2 functions to allow mongoose access
subscriberSchema.methods.getInfo = function () {
  return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function () {
  return this.model("Subscriber")
    .find({ zipCode: this.zipCode })
    .exec();
};

// Now you need to subscribe to this schema in your DB
module.exports = mongoose.model("Subscriber", subscriberSchema);