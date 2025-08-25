// let student = [
// { name: "Alice", score: 85 },
// { name: "Bob", score: 92 },
// { name: "Charlie", score: 78 }
// ];

// let result = student.map(checkScore);

// function checkScore(student){
//     return student.score >= 80 ? "Passed" : "Failed";
// }

let students = [
    { name: "Alice", score: 85 }, 
    { name: "Bob", score: 92 }, 
    { name: "Charlie", score: 78 }
];

let results = students.map(student => ({
    name: student.name,
    result: student.score >= 80 ? "Passed" : "Failed"
}));

results.forEach(log);

function log(results){
    console.log(`${results.name}:${results.result}`);
}
