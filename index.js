function Address(street, city, postcode) {
  this.street = street;
  this.city = city;
  this.postcode = postcode;
}

const address1 = new Address("smith", "sydney", 2000);
const address2 = new Address("smith", "sydney", 2000);
const address3 = address1;

function areEqual(obj1, obj2) {
  for (const key in obj1) if (obj1[key] !== obj2[key]) return false;

  return true;
}

console.log(areEqual(address1, address2));


function areSame(obj1, obj2){
return obj1 === obj2;
}

console.log(areSame(address1,address3)); 