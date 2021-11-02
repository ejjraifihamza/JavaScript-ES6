// ! For loop
const numbers1 = [10, 20, 30, 40, 50];
/*
? initializer
? condition
? incrementer
*/
for (let i = 0; i < numbers1.length; i += 1) {
  console.log(numbers1[i]);
}
console.log("#################################################");
// ! forEach ES5, break is not defined in forEach, and return false (that mean stop executing any code).
const numbers = [10, 20, 30, 40, 50];
// ? without initializer, condition, incrementer
// numbers.forEach((number, index, numbers) => {
//   console.log(number);
//   console.log(index);
//   console.log(numbers);
// });
// * i just need number
numbers.forEach((number) => {
  console.log(number);
});
console.log("#################################################");
// ! for...in ES6 access each index in array
// * 'const' in for in loop does not change the value bcz for in loop create another scoop for each iteration
const numbers2 = [10, 20, 30, 40, 50];
for (const index in numbers2) {
  console.log(numbers2[index]);
}
// ? Prb with this for in loop
for (const index in numbers2) {
  // index here is a string
  console.log(typeof index); // string
  console.log(typeof +index); // number
}
console.log("#################################################");
// ! for...of ES6 access each element in array
const numbers3 = [10, 20, 30, 40, 50];
for (const number of numbers3) {
  //   if (number === 30) {
  //     break;
  //   }
  console.log(number);
}
