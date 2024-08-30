let array = [1, 2, 3, "a", "b", "c"];

//forEach
let arrayStr: string[] = [];
array.forEach((elem, index) => {
  if (typeof elem === "string") {
    arrayStr.push(elem);
  }
});
console.log(arrayStr);

//map
let arrayStr2: String[] = array
  .filter((elem) => typeof elem === "string")
  .map((elem) => elem);
console.log(arrayStr2);
