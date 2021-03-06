'use strict'

const express = require('express');
const router = express.Router();
const controllerStudents = require('../controllers/students');

// Student locations
router.get('/', controllerStudents.getAllStudents,
    (req,res,next) => {
        res.render("students", {students: req.data, title: "title"});
    });

//router.post('/', controllerStudents)

// REMEMBER TO ADD students/ to routes used in forms
// where you have to redirect to a new subpage
// i.e. using it for student.ejs but not addStudent.ejs
router.get("/addStudent", controllerStudents.addStudent);
router.post('/addStudent', controllerStudents.addedStudent);


module.exports = router;