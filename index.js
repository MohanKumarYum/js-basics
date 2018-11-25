const address = {
    street: "station",
    city: "sydney",
    postcode: 2000
};

function showAddress(address) {
    for (const key in address)
        console.log(key, address[key]);
}

showAddress(address);