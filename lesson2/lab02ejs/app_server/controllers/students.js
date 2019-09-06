'use strict'

module.exports.students = function (req, res) {
    res.render('students', {
        title: 'Students',
        students
    });
};


let students = [{
    studentNo: '1',
    studentName: 'Brenda',
    studentSurName: 'Johnson'
}];
