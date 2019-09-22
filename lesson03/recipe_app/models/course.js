const mongoose = require('mongoose'),
    {Schema} = mongoose,
    courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    items: [],
    zipCode: {
        type: Number,
        min: [1000, "ZipCode too short"],
        max: 9999
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Course", courseSchema);