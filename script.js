// ! Data type:
/*
? Primitive types (string, number, boolean, undefined, null) => passed by value
? mean: even if you create a copy of variable and change that copy, the main variable does not change
*/

let fullName = "Jhon Doe";
let compFullName = fullName;
compFullName = "Maria Cartner";
console.log(fullName); // Jhon Doe => primtive types: passed by value

/*
? Object (array-literal [], object-literal {}) => passed by reference
? mean: if you create a copy of variable and change that copy, the main variable it will change also
*/
// * array
let numbers = [1, 2, 3, 4, 5];
let copyOfNumbers = numbers;

copyOfNumbers[0] = 100;
console.log(numbers); // [100, 2, 3, 4, 5] => array is passed by reference

// * object
let studentInfo = {
  fullName: "Jhon Doe",
  age: 26,
};
console.log(studentInfo);
let copyOfStudentInfo = studentInfo;
copyOfStudentInfo.fullName = "Maria Cartner";
console.log(studentInfo); // {fullName: "Maria Cartner", age: 26}
