// ! Getters and Setters
let studentInfo = {
  firstName: "Jhon",
  lastName: "Doe",
  // ! get fullName by function
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  // ! get fullName by Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // ! setter
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

// get the value of fullName:
console.log(studentInfo.fullName);

// change the value of fullName and the value of firstName, lastName: (you canot change it without setter)
studentInfo.fullName = "Micheal Smith";

console.log(studentInfo.fullName);

console.log(studentInfo.firstName);
console.log(studentInfo.lastName);
