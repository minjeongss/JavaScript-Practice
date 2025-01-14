// 기본 생성자 구조
const Person = function (name) {
  this.name = name;
};

// call
const personCallVer = {};
Person.call(personCallVer, "김민정");
console.log(personCallVer);

// apply

const personApplyVer = {};
Person.apply(personApplyVer, ["김민정"]);
console.log(personApplyVer);

// bind
const personBindVer = {};
const Developer = Person.bind(personBindVer);
Developer("김민정");
console.log(personBindVer);
