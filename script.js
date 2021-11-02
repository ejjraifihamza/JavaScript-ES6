// ! Destructuring Functions
const getStudentInfo = () => ({
  name: "John Doe",
  age: 26,
});

console.log(getStudentInfo());
const { name: studentName, age: studentAge } = getStudentInfo();
console.log(studentName);
console.log(studentAge);

// * example 2
const getFullName = ({ firstName = "Jhon", lastName = "Doe" }) => {
  return `${firstName} ${lastName}`;
};

console.log(getFullName({}));
console.log(
  getFullName({
    firstName: "hamza",
    lastName: "ejjraifi",
  })
);
// ? change order of object argument
const person = getFullName({ lastName: "Cartner", firstName: "Maria" });
console.log(person);
