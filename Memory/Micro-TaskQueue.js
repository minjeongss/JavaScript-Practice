// Call Stack에 등록
console.log("script start");

// Task Queue에 등록
setTimeout(function () {
  console.log("setTimeout");
}, 0);

// MicroTask Queue에 등록
Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

// Call Stack에 등록
console.log("script end");

// 순서
// script start
// script end
// promise1
// promise2
// setTimeout
