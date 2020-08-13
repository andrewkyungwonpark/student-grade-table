class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var sumOfGrades = 0;
    for (var i=0; i<grades.length; i++) {
      sumOfGrades += grades[i].grade;
    }
    var avg = Math.trunc(sumOfGrades / grades.length);
    this.pageHeader.updateAverage(avg);
  }
  getGrades() {
    $.ajax({
      type: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {"X-Access-Token": "vTQEhu9d"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  createGrade(name, course, grade) {
    console.log(name, course, grade);
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {"X-Access-Token": "vTQEhu9d"},
      method: "POST",
      dataType: "json",
      data: {
        "name": name,
        "course": course,
        "grade": grade,
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error) {
    console.log(error)
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  deleteGrade(id) {
    console.log(id);
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades" + "/" + id,
      headers: { "X-Access-Token": "vTQEhu9d" },
      method: "DELETE",
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error) {
    console.log(error)
  }
  handleDeleteGradeSuccess() {
    this.getGrades()
  }
}
