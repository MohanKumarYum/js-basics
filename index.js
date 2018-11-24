const array = [80, 80, 80];

console.log(calculateGrade(array));

function calculateGrade(marks) {

    const average = calculateAverage(marks);
    
    if (average <= 59) return "F";

    if (average <= 69) return "D";

    if (average <= 79) return "C";

    if (average <= 89) return "B";

    return grade = "A";
}

function calculateAverage(array) {

    let sum = 0;

    for (const mark of array) {
        sum += mark;
    }

    return (sum / array.length);
}