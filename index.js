showNumbers(11);

function showNumbers(limit) {
    for (let index = 0; index <= limit; index++) {

        // if (index % 2 === 0) {
        //     console.log(index, "Even");
        // } else
        //     console.log(index, "Odd");

        const message = (index % 2 === 0) ? "Even" : "Odd";
        console.log(index, message);
    }
}