const students = [ 
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 85 }
]

function getHighGrades(students){
    return students.filter( student=>student.grade > 80 ) .map (student=>student.name)
}
console.log(getHighGrades(students))