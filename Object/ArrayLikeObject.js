//배열
let array = [1, 2, 3];

//유사 배열 객체
let arrayLike = {
  0: 1,
  1: 2,
  length: 2,
};

//1. 접근
console.log("1.배열: ", array[0]);
console.log("1.유사 배열 객체: ", arrayLike[0]);

//2. 배열 메서드 사용: forEach
array.forEach((value, index, array) => {
  console.log("2.배열: ", value, index, array);
});
// arrayLike.forEach((value, index, array) => {
//   console.log("2.유사 배열 객체: ", value, index, array);
// });
//Error: TypeError: arrayLike.forEach is not a function

//3. 유사 배열 객체 > 배열 메서드 사용 가능하도록 변경
let arrayLikeChange = Array.from(arrayLike);
arrayLikeChange.forEach((value, index, array) => {
  console.log("3.유사 배열 객체", value, index, array);
});
