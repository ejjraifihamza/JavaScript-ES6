// ! Real Array vs Array-like
/*
the two of them are typeof 'object'
they don't have the same prototype
*/
// * Real Array
const colors = ["red", "green", "blue"];
console.log(typeof colors);
// * Array-like
const rgb = {
  0: "red",
  1: "green",
  2: "blue",
  length: 3,
};
console.log(rgb);
console.log(typeof rgb);
// for (const color of rgb) {
//   console.log(color); // ! error rgb is not iterable
// }

const devs = document.querySelectorAll(".message");
console.log(devs);
console.log(typeof devs);
console.log(devs[0]);
// * So devs is Array-like, not real array

// ! Converting rgb and devs to become real array, and use array constructor
// * start with rgb
const rgbToArray = Array.from(rgb);
console.log(rgbToArray);
for (const color of rgbToArray) {
  console.log(color);
}
// * Convert devs
const devsToArray = Array.from(devs);
console.log(devsToArray);
for (const tag of devsToArray) {
  console.log(tag);
}

// ! convert string to array
const name = "Ejjraifi Hamza";
const nameToArray = Array.from(name);
console.log(nameToArray);

// ! with Array.of() you can create an real array
const numbers = Array.of(10, 20, 30, 40);
console.log(numbers);
