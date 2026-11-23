const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const total = students.reduce((score,stu) => score + stu.score ,0)
  return total / students.length
}

console.log(getAverageStudentScore(students)); // Outp