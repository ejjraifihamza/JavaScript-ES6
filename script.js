// ! let's say we want to combin three or whatever arrays in one array without make it nested array
let arrayOne = [1, 2, 3, 4];
let arrayTwo = ["Jhon Doe", "Maria Cartner"];
let number = 123;
// * first way
let myArrays = [].concat(arrayOne, arrayTwo, number);
console.log(myArrays); // [1, 2, 3, 4, 'Jhon Doe', 'Maria Cartner', 123]
// * Spread Operator way
let myArrays2 = [...arrayOne, ...arrayTwo, number];
console.log(myArrays2); // [1, 2, 3, 4, 'Jhon Doe', 'Maria Cartner', 123]
//  ? with Spread Operator is look clean
