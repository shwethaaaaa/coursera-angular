var student = {
    name: "",
    type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
    calculateOutput();
}

function calculateOutput() {
    student.name = document.getElementById('name').nodeValue;

    var total = 0;
    for (var i = 0; i < student.name.length; i++) {
        total += student.name.charCodeAt(i);
    }

    var output = "Total Numeric value of person's name is " + total;
    document.getElementById('output').innerText = output;
}