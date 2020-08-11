class GradeTable {
  constructor(tableElement, gradeTable) {
    this.tableElement = tableElement;
    this.gradeTable = gradeTable;
  }
  updateGrades(grades) {
    var tableBody = this.tableElement.querySelector('tbody');
    tableBody.innerHTML = '';
    for (var i = 0; i < grades.length; i++) {
      var row = document.createElement('tr');
      var name = document.createElement('td');
      name.textContent = grades[i].name;
      var course = document.createElement('td');
      course.textContent = grades[i].course;
      var grade = document.createElement('td');
      grade.textContent = grades[i].grade;
      row.append(name, course, grade);
      tableBody.append(row);
    }
    console.log(grades);
  }
}
