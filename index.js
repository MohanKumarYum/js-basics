// const address = {
//     street: "station",
//     city: "sydney",
//     postcode: 2000
// };

function showAddress(address) {
    for (const key in address)
        console.log(key, address[key]);
}
const address = createAddress("station", "sydney", 2000);

showAddress(address);

function createAddress(street, city, postcode) {
    return {
        street,
        city,
        postcode
    };
}

function Address(street, city, postcode) {
        this.street = street;
        this.city = city;
        this.postcode = postcode;
}

const address1 = new Address("smith", "sydney", 2000);

showAddress(address1);

