'use strict'
module.exports.students = function (req, res) {
    res.render('students', {
        title: 'Students',
        students
    });
};

// GET
module.exports.addStudent = (req,res) => {
    console.log("Module Exports addStudent speaking");
    res.render('addStudent', {
        title: 'Add students here',
    });
};

// POST 
// Se: https://tanmaysarkar.com/html-form-with-ejs-template-in-nodejs/
module.exports.addedStudent = function (req,res) {
    console.log("Exports addedStudent speaking")
    var student = {
        sNo: req.body.studentNo,
        fName : req.body.studentName,
        sName : req.body.studentSurname,
        sGrade: req.body.studentGrade
    }
    console.log(student);

    students.forEach(element => {
        console.log(`Element:\n ${element.fName} -- ${element}`);
    });

    students.push(student);


    // HOW TO ACCESS ANOTHER WEBPAGE THROUGH THIS CONTROLLER?
    // FOR EXAMPLE THE STUDENT LIST PAGE
    res.render('students', {
        title: 'Students',
        students
    });
    //showStudents();

};

let students = [{
    studentNo: 1,
    studentName: 'Brenda',
    studentSurname: 'Johnson',
    studentGrade: 20
}];