class GradeTable {
  constructor(tableElement, gradeTable) {
    this.tableElement = tableElement;
    this.gradeTable = gradeTable;
  }
  updateGrades(grades) {
    var tableBody = this.tableElement.querySelector('tbody');
    tableBody.innerHTML = '';
    for (var i = 0; i < grades.length; i++) {
      var gradeRow = this.renderGradeRow(grades[i], this.deleteGrade)
      tableBody.append(gradeRow);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var row = document.createElement('tr');
    var name = document.createElement('td');
    var course = document.createElement('td');
    var grade = document.createElement('td');
    var deleteColumn = document.createElement('td');
    var deleteBtn = document.createElement('button');

    name.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger";
    deleteBtn.addEventListener('click', function () {
      deleteGrade(data.id);
    })

    deleteColumn.append(deleteBtn);
    row.append(name, course, grade, deleteColumn);

    return row;
  }
}
