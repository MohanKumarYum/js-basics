function sum(limit) {

    const firstMultiple = 3;
    const secondMultiple = 5;
    const initialValue = 0
    let sumMultiples3and5 = initialValue;

    for (let index = initialValue; index <= limit; index++) {

        if (index % firstMultiple === initialValue || index % secondMultiple === initialValue )
            sumMultiples3and5 += index;
    }
    
    return sumMultiples3and5
}

console.log(sum(6));