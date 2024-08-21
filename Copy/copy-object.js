let obj1 = { name: "Kim", details: { type: "dev" } };

//객체 얕은 복사
let obj2 = { ...obj1 };

//객체 자체
console.log(obj1 === obj2); //false

//객체 내부 프로퍼티 원시값
console.log(obj1.name === obj2.name); //true

//객체 내부 프로퍼티 객체
console.log(obj1.details === obj2.details); //true

//객체 깊은 복사
let obj3 = JSON.parse(JSON.stringify(obj1));

//객체 자체
console.log(obj1 === obj3); //false

//객체 내부 프로퍼티 원시값
console.log(obj1.name === obj3.name); //true

//객체 내부 프로퍼티 객체
console.log(obj1.details === obj3.details); //false
