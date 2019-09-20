const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define schema
const StudentSchema = new Schema({
    studentNo: Number,
    studentName: String,
    studentSurname: String,
    studentGrade: Number,
});

module.exports = mongoose.model("Student", StudentSchema);