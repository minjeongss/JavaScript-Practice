// 일반 함수 호출: 전역 객체 바인딩
// (1) 일반 함수
function NormalFunction() {
  console.log(this === global); //node에선 global, browser에선 window

  function NormalInnerFunction() {
    console.log(this === global);
  }
  NormalInnerFunction();
}
NormalFunction();

// (2) 일반 함수: 변수에 할당
const NormalFunctionVariable = function () {
  console.log(this === global); //true
};
NormalFunctionVariable();

// 메서드 호출: 메서드 호출 객체 바인딩
const method = {
  innerMethod: function () {
    console.log(this);
  },
};

method.innerMethod(); // { innerMethod: [Function: innerMethod] }

// 생성자 함수 호출: 생성할 인스턴스 바인딩
function Person() {
  this.name = "김민정";
}

const person = new Person();
console.log(person); // Person { name: '김민정' }
