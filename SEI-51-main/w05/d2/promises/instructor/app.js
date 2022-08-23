// function promiseFunc(resolve, reject) {
//   setTimeout(function () {
//     // resolve("Timed Out");
//     reject("something went wrong");
//   }, 2000);
// }

// const p = new Promise(promiseFunc);

// //promised pending for 2 seconds
// console.log(p);

// //after 2 seconds we should see the result
// p.then((result) => console.log(result)).catch((err) => console.log(err));

function asyncAdd(a, b, delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a + b);
    }, delay);
  });
}

asyncAdd(5, 10, 2000)
  .then((sum) => {
    console.log(sum);
    return asyncAdd(sum, 100, 1000);
  })
  .then((sum) => {
    console.log(sum);
    return asyncAdd(sum, 1000, 2000);
  })
  .then((sum) => console.log(sum));
