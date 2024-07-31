# 함수에 대해 분석해보자! 🤖

## 참고 주소

- [일반 함수 VS 화살표 함수](https://hhyemi.github.io/2021/06/09/arrow.html)

## 함수 분류

- 일반 함수
- 화살표 함수

## this에 대한 차이점

### 일반 함수

함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.

- 함수 실행시: 전역 객체(window)
- 메소드 실행시: 메소드 소유 객체
- 생성자 실행시: 새롭게 만들어진 객체

```js
function normalFunction() {
  this.name = "상위입니다.";
  return {
    name: "return문입니다.",
    speak: function () {
      console.log(this.name);
    },
  };
}
const normalFun = new normalFunction();
normalFun.speak(); //return문입니다.
```

### 화살표 함수

함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 언제나 상위 스코프의 this를 가리킨다.

```js
function arrowFunction() {
  this.name = "상위입니다.";
  return {
    name: "return문입니다.",
    speak: () => {
      console.log(this.name);
    },
  };
}
const arrowFun = new arrowFunction();
arrowFun.speak(); //상위입니다.
```

## 생성자 함수 사용 여부에 대한 차이점

### 일반 함수

생성자 함수로 사용된다.

```js
function fun() {
  this.num = 1234;
}
const funA = new fun();
console.log(funA.num); // 1234
```

### 화살표 함수

생성자 함수로 사용되지 않는다.

```js
const arrFun = () => {
  this.num = 1234;
};
const funB = new arrFun(); // Error
```

## arguments 사용 여부에 대한 차이점

### 일반 함수

arguments를 사용한다.

```js
function fun() {
  console.log(arguments); // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
fun(1, 2, 3);
```

### 화살표 함수

arguments를 사용하지 않는다.

```js
const arrFun = () => {
  console.log(arguments); // Uncaught ReferenceError: arguments is not defined
};
arrFun(1, 2, 3);
```
