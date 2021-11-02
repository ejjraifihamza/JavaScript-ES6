// ! Spread Operator
// * Object
/* 
? object-literal {}) => passed by reference
? mean: if you create a copy of variable and change that copy, the main variable it will change also
*/

const studentInfo = {
  fullName: "Jhon Doe",
  age: 26,
};
console.log(studentInfo);
let copyOfStudentInfo = studentInfo;
copyOfStudentInfo.fullName = "Maria Cartner";
console.log(studentInfo); // {fullName: "Maria Cartner", age: 26}
console.log("########################################################");
// * if you want the main variable does not change, use spread operator
const studentInfo2 = {
  fullName: "Steven Doe",
  age: 22,
};
console.log(studentInfo2); // {fullName: 'Steven Doe', age: 22}
let copyOfStudentInfo2 = { ...studentInfo2 };
copyOfStudentInfo2.fullName = "Andres Doe";
console.log(copyOfStudentInfo2); // {fullName: 'Andres Doe', age: 22}
console.log(studentInfo2); // {fullName: 'Steven Doe', age: 22}
// ! as you can see value of main variable does not change by using spread operator

// * Function

const addNumbers = (a, b, c) => a + b + c;
const numbers = [10, 20, 30];
const result = addNumbers(...numbers);
console.log(result);
