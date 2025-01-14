# This에 대해 분석해보자 ⚡

## 정의

this란 자신이 속한 객체를 가리키는 식별자를 참조할 수 있는 키워드이다.

## This 자동 바인딩

### 일반 함수(function) 호출

전역 객체에 바인딩된다.

```js
function NormalFunction() {
  console.log(this === global); //true
}
NormalFunction();
```

```js
const NormalFunctionVariable = function () {
  console.log(this === global); //true
};
NormalFunctionVariable();
```

### 메서드 호출

메서드 호출한 객체에 바인딩된다. 즉, 마침표 연산자 앞에 기술한 객체에 바인딩된다.

```js
const method = {
  innerMethod: function () {
    console.log(this);
  },
};

method.innerMethod(); // { innerMethod: [Function: innerMethod] }
```

### 생성자 함수 호출

미래에 생성할 인스턴스가 바인딩된다.

```js
function Person() {
  this.name = "김민정";
}

const person = new Person();
console.log(person); // Person { name: '김민정' }
```

### 화살표 함수

this가 없기에, 선언된 시점에서 상위 스코프가 바인딩된다.

## This 수동 바인딩

첫 번째 인자로 전달하는 객체에 this를 바인딩할 수 있다.

### call

인자를 대괄호로 감싸지 않고, 하나씩 전달한다.

```js
Person.call(personCallVer, "김민정");
```

### apply

인자를 배열 형태로 전달한다.

```js
Person.apply(personApplyVer, ["김민정"]);
```

### bind

call,apply와 다르게, 함수를 실행하지 않고 새로운 함수를 반환해 이를 실행하여 원본 함수를 실행한다.

```js
const Developer = Person.bind(personBindVer);
Developer("김민정");
```
