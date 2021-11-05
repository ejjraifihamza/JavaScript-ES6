// ! try to add one student to students list after 3s
const students = [
  { fullName: "Jhon Doe", age: 22 },
  { fullName: "Micheal Smith", age: 25 },
];

// * add student after 3s
function addStudent(student) {
  setTimeout(() => {
    students.push(student);
  }, 3000);
}

// * show students list after 0.5s
function getStudents() {
  setTimeout(() => {
    console.log(students);
  }, 500);
}

addStudent({ fullName: "Maria Cartner", age: 30 });
getStudents();

/* 
! the prb here is: getStudent() don't show the student we add bcz addStudent() have a delai with 3s
! and in other hand getStudent have a delai with just 0.5s
! to solve this prb let's work with callback fn
*/

// !!!!!!!!!!!!!! FIRST WAY (CALLBACK FN)
const students2 = [
  { fullName: "Jhon Doe", age: 22 },
  { fullName: "Micheal Smith", age: 25 },
];

// * add student after 3s, with callback fn ass an argument
function addStudent2(student, callback) {
  setTimeout(() => {
    students2.push(student);
    callback();
  }, 3000);
}

// * show students list after 0.5s
function getStudents2() {
  setTimeout(() => {
    console.log(students2);
  }, 500);
}

addStudent2({ fullName: "Maria Cartner", age: 30 }, getStudents2);
/* 
! what happent with this way that we manage the order and tell the programme to do not execute the getStudents2
! intel complete executing of addStudent2()
*/

// !!!!!!!!!!!!!! SECOND WAY (PROMISE)
const students3 = [
  { fullName: "Jhon Doe", age: 22 },
  { fullName: "Micheal Smith", age: 25 },
];

// * add student after 3s, with promise
function addStudent3(student) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      students3.push(student);
      resolve();
    }, 3000);
  });
}
// * show students list after 0.5s
function getStudents3() {
  setTimeout(() => {
    console.log(students3);
  }, 500);
}
// * Tell the programe to execute addStudent3() first, then if promis state: fullfilled execute getStudents3()
addStudent3({ fullName: "Mary Cartner", age: 30 }).then((onFulfilled) => {
  getStudents3();
});

// !!!!!!!!!!!!!! THIRD WAY: BEST WAY (ASYNC/AWAIT)
// * note: async/await is abstraction or syntactic sugar of promise to make promise easier to read or to express
const students4 = [
  { fullName: "Jhon Doe", age: 22 },
  { fullName: "Micheal Smith", age: 25 },
];

// * add student after 3s, with async/await
function addStudent4(student) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      students4.push(student);
      resolve();
    }, 3000);
  });
}

// * show students list after 0.5s
function getStudents4() {
  setTimeout(() => {
    console.log(students4);
  }, 500);
}

async function main() {
  await addStudent4({ fullName: "Josh Cartner", age: 30 });
  getStudents4();
}
main();
