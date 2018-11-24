function fizzBuzz(input) {
    if (typeof input !== "number" || input <= 0)
        return NaN;

    if ((input % 3 === 0 && input % 5 === 0))
        return "FizzBuzz";

    if (input % 3 === 0)
        return "Fizz";

    if (input % 5 === 0)
        return "Buzz";

    return input;
}

let output = fizzBuzz(false);
console.log(output);

output = fizzBuzz(7);
console.log(output);

output = fizzBuzz(9);
console.log(output);

output = fizzBuzz(15);
console.log(output);

output = fizzBuzz(-1);
console.log(output);
