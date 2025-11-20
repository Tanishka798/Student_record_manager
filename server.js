let students = [
  { id: 1, name: "Amit", marks: 85 }
];

function getAllStudents() {
  console.log("GET /students");
  console.log(students);
}

function addStudent(name, marks) {
  const newStudent = {
    id: students.length + 1,
    name,
    marks
  };

  students.push(newStudent);
  console.log("POST /students");
  console.log(newStudent);
}

function getStudentById(id) {
  const student = students.find(s => s.id === id);

  console.log(`GET /students/${id}`);

  if (!student) {
    console.log("Student not found");
    return;
  }

  console.log(student);
}

getAllStudents();

addStudent("Tanishka", 92);

getStudentById(2);
