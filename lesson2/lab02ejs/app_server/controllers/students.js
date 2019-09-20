'use strict'
const Students = require('../models/db');

// Get students from database
module.exports.getAllStudents = (req, res,next) => {
        Students.find( {}, (error, students) => {
            if (error) next(error);
            req.data = students;
            next();
        });
    };

// GET addstudent page
module.exports.addStudent = (req,res) => {
    console.log("Module Exports addStudent speaking");
    res.render('addStudent', {
        title: 'Add students here',
    });
};

//module.exports.deleteStudent = (req,res) => {
//    Students.find( ) // TODO: Add delete functionality
//};
// POST Se: https://tanmaysarkar.com/html-form-with-ejs-template-in-nodejs/
module.exports.addedStudent = (req,res) => {
    
    let newStudent = new Students( {
        studentNo: req.body.studentNo,
        studentName : req.body.studentName,
        studentSurname : req.body.studentSurname,
        studentGrade: req.body.studentGrade
    });

    newStudent.save( (error, result) => {
        if (error) res.send("error");
        console.log(`The result of subscriber save: ${result}`);
        console.log(newStudent.studentName);
        res.redirect('/students');
    });
};