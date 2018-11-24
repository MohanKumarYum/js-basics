function checkSpeed(input) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const maxDemeritPoints = 12;

  if (typeof input !== "number") return NaN;

  if (input < speedLimit + kmPerPoint) return "Ok";

  if (input > speedLimit) {
    const demeritPoints = Math.floor((input - speedLimit) / kmPerPoint);

    if (demeritPoints >= maxDemeritPoints) {
      return "License Suspended";
    }

    return "Points: " + demeritPoints;
  }
}

console.log(checkSpeed("Hello"));
console.log(checkSpeed(50));
console.log(checkSpeed(70));
console.log(checkSpeed(75));
console.log(checkSpeed(76));
console.log(checkSpeed(80));
console.log(checkSpeed(84));
console.log(checkSpeed(96));
console.log(checkSpeed(125));
console.log(checkSpeed(130));


// Result

// NaN
// Ok
// Ok
// Points: 1
// Points: 1
// Points: 2
// Points: 2
// Points: 5
// Points: 11
// License Suspended