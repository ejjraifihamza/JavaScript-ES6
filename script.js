// ! Object.defineProperty
let studentInfo = {
  firstName: "Jhon",
  lastName: "Doe",
};

/*
? defineProperty have 3 arguments (object, property that you want to add to this obj(string), {Configuration})
? Configuration list:
? value => value of pproperty that you want to add to this obj
? writable => is boolean (if true, means that you can update value, if false, will you know), by default: false
? enumerable => is boolean (if true, means that you when itireat for obj key, key you add will show up too 'Ex1'), by default: false
? configurable => is boolean, default false, if true means that you confige that property you add in first, (delete)
*/

// ! Property - Data (means when you define a property with value)
Object.defineProperty(studentInfo, "college", {
  value: "Harvard",
  //   configurable: true,
  //   writable: true,
  //   enumerable: true, // ! Ex1
});
studentInfo.college = "oxf";
console.log(studentInfo); // {firstName: 'Jhon', lastName: 'Doe', college: 'Harvard'}
// ! Ex1
for (const key in studentInfo) {
  console.log(key);
}

// ! Property - Accessor (means when you define a property value with setter)
Object.defineProperty(studentInfo, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
  //   configurable: true,
  //   writable: true,
  //   enumerable: true, // ! Ex1
});
console.log(studentInfo.fullName);
studentInfo.fullName = "Micheal Smith";
console.log(studentInfo.fullName);

// !!!!!! Property canot be Accessor and Data in the same time
