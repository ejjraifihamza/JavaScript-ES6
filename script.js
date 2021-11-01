// ! Destructuring Objects
// const car = {
//   name: "fiat",
//   model: 500,
//   color: {
//     red: true,
//     green: false,
//   },
// };

// const { red, green } = car.color;
// console.log(red);
// console.log(green);

// const {
//   name,
//   model,
//   color: { red, green },
//   year = 2012,
// } = car;
// console.log(name);
// console.log(model);
// console.log(red);
// console.log(green);
// console.log(year);
// console.log(car);

// * to change tha name of ur const
// const {
//   name: carName,
//   model: carModel,
//   color: { red: carColorRed, green: carColorGreen },
//   year: carYear = 2012,
// } = car;

// console.log(carName);
// console.log(carModel);
// console.log(carColorRed);
// console.log(carColorGreen);
// console.log(carYear);

// * in case you have array inside object
// const any = {
//   namee: "fiat",
//   modell: 500,
//   colors: ["red", "green", "yellow"],
// };

// const { namee, modell, colors } = any;
// console.log(namee);
// console.log(colors[1]);

// ! Destructuring Arrays
// const studentInfo = [8888, "Maria Cartner", "Washington", [15, 12, 13]];

// const [id, name, city, [notesOne, notesTwo, notesThree], school = "Harvard"] =
//   studentInfo;
// console.log(id);
// console.log(name);
// console.log(city);
// console.log(notesOne);
// console.log(notesTwo);
// console.log(notesThree);
// console.log(school); // ? is not in the studentInfo array
// console.log(studentInfo.length); // ? length still 3

// ? update variable value from array, destructuring way
// let studentName = "hhh";
// [, studentName] = studentInfo;
// console.log(studentName);

// * Swapping variables value
// let a = 10,
//   b = 20;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
