showStars(1);

function showStars(rows) {

    let stars = "";

    for (let index = 1; index <= rows; index++) {
        stars += "*";
        console.log(stars);
    }
}