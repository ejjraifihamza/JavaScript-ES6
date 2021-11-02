// ! Array.some() check if one element in array give a true value, so it will give a true even if other elements give false

/*
? arg: some(element, index, arrayItSelf) 
! function should return boolean
*/
// * check if number in array numbers is greather than twenty
const numbers = [3, 5, 15, 27, 31];
const isGreatherThanTwenty = numbers.some((element, index, arrayItSelf) => {
  return element > 20;
});
console.log(isGreatherThanTwenty); // return true
// * check if number in array numbers is double
const isEven = numbers.some((number, index, arrayItSelf) => {
  return number % 2 == 0;
});
console.log(isEven); // return false

// ! Array.every() check if all element in array give a true/false value
/*
? to make it return true should every element in array passe the test with true
? if one element does not passe the test it will return false
*/
const myNumbers = [5, 6, 9, 54, 66];
const isGreatherThanTen = myNumbers.every((element, index, arrayItSelf) => {
  return element > 10;
});
console.log(isGreatherThanTen); // return false

const isGreatherThanFour = myNumbers.every((element, index, arrayItSelf) => {
  return element > 4;
});
console.log(isGreatherThanFour); // return true
