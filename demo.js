const students = [
    {name: "Harr" , subject : "Jaava"},
    {name: "cghar" , subject : "maba"},
];


function enrollStudents(student) {
    setTimeout(function() {
        students.push(student);
    } , 3000);
}

function getStudents() {
    setTimeout(function() {
        console.log()
    })
}