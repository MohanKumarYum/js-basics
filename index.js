function countTruthy(array) {

    let truthyCount = 0;

    for (const iterator of array) {
        if (iterator)
            truthyCount++;
    }
    return truthyCount;
}

const array = [0, null, undefined, "",2, 3];

console.log(countTruthy(array));