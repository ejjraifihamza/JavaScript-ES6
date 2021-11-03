/*
 ? Just you create Promise Constructor => state 'initial'
 ? Promise => I keep it => I will hang with my friends => state 'fulfilled'
 ? Promise => I don't keep it => I will not hang with friends => state 'rejected'
 ! Promise only have one state (initial or fulfilled or rejected)
*/
const hangWithFriends = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hang With Friends");
    reject("I will not hang with friends"); // ignored
  }, 500);
});
console.log(hangWithFriends);
/* 
 ? then() have two callback fn first: on state fulfilled, second: on state rejected
 ? if State is fulfilled then first callback fn in then() will execute
 ? if State is rejected then second callback fn in then() will execute
*/
const answer = hangWithFriends.then(
  (onFulfillled) => {
    console.log(onFulfillled);
  },
  (onRejected) => {
    console.log(onRejected);
  }
);

// ! if you 100% sure that you will not hang with friend you can replace first callback fn in then() with null
const hangWithFriends2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I will not hang with friends");
  }, 500);
});

// const answer2 = hangWithFriends2.then(null, (onRejected) => {
//   console.log(onRejected);
// });
// console.log(hangWithFriends2);
/*
 * but if you already sur, this way is not clean, instead you can use catch()
 * catch() use only on promiseState: rejected, it catch the errors
 */
const answer2 = hangWithFriends2.catch((onrejected) => {
  console.log(onrejected);
});
