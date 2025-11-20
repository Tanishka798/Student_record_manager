# Student_record_manager
This project is a simple Student Record Manager created using JavaScript.
It demonstrates how to manage data in-memory and perform operations similar to basic API routes.

📌 Features
✅ GET /students
Returns the list of all students.

✅ POST /students

Adds a new student using a name and marks.
Example Request Body:
{
  "name": "Rahul",
  "marks": 92
}

✅ GET /students/:id
Returns a student by their ID.
Expected Output:
{
  "id": 2,
  "name": "Rahul",
  "marks": 92
}

🗂️ In-Memory Data Structure
let students = [
  { id: 1, name: "Amit", marks: 85 }
];

📄 server.js (Main Logic)

This file contains:
1)Function to get all students
2)Function to add a new student
3)Function to fetch a student by ID
4)Test calls to simulate route actions
