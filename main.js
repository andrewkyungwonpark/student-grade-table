var table = document.querySelector('.table');
var gradeTable = new GradeTable(table, hiddenP);
var header = document.querySelector('header');
var pageHeader = new PageHeader(header);
var form = document.querySelector('form')
var gradeForm = new GradeForm(form)
var app = new App(gradeTable, pageHeader, gradeForm);
var hiddenP = document.querySelector('p');
app.start();
