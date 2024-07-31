//함수
function regularFunction() {
  console.log("[함수] 일반 함수: ", this);
}
const arrowFunction = () => {
  console.log("[함수] 화살표 함수: ", this);
};
regularFunction(); //global
arrowFunction(); //{}

//객체의 메서드
const obj = {
  value: 20,
  regularFunction: function () {
    console.log("[객체 메서드] 일반 함수: ", this.value);
  },
  arrowFunction: () => {
    console.log("[객체 메서드] 화살표 함수: ", this.value);
  },
};

obj.regularFunction(); //20
obj.arrowFunction(); //undefined

//생성자
//- 일반 함수: 생성자 사용 가능
function RegularConstructor() {
  this.value = 20;
}
const instance = new RegularConstructor();
console.log("[생성자] 일반 함수: ", instance.value);

//- 화살표 함수: 생성자 사용 불가능
const ArrowConstructor = () => {
  this.value = 20;
};
try {
  const instance = new ArrowConstructor();
} catch (e) {
  console.log(e.message);
}
