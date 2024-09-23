// sample array of students
const students = [
  {
    name: "Sebas",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "Charly",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Pedro",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Andrei",
    lastname: "Ray",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Daniel",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

// Write your code here!
console.log(students)

students.forEach((student) => console.log(student.name));
