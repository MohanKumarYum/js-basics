// bitwise operators

// Read, Write & Execute

// 00000001 - 1 Read
// 00000010 - 2 Write
// 00000100 - 4 Execute

const readPermission = 1;
const writePermission = 2;
const executePermission = 4;

let myPermission = 0;

myPermission = myPermission | readPermission | executePermission;

console.log(myPermission & writePermission ? "Read" : "No");

