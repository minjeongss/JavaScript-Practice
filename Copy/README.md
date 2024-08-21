# 복사에 대해 분석해보자! 🤖

## 실습

- [copy.js: 참조, 얕은 복사, 깊은 복사 비교](https://github.com/minjeongss/JavaScript-Practice/blob/main/Copy/copy.js)
- [copy-object.js: 객체 내부의 원시 타입, 객체 타입 비교](https://github.com/minjeongss/JavaScript-Practice/blob/main/Copy/copy-object.js)

## 데이터 타입 구성

- 원시 타입: Number, String, Boolean, undefined, null, Symbol
- 객체 타입: 객체, 함수, 배열

## 값 비교

- 원시 타입: 값 자체 비교
- 객체 타입: 참조값(메모리 주소) 비교

- 객체 내부 원시 타입: 값 자체 비교
- 객체 내부 객체 타입: 참조값(메모리 주소) 비교

## 복사 종류

- 얕은 복사(Shallow Copy)
- 깊은 복사(Deep copy)

### 참조

동일한 메모리 주소를 참조하는 할당 방식이다.

```js
const obj1 = obj2;
```

```js
console.log(obj1 === obj2); //true
```

### 얕은 복사

다른 메모리 주소를 가지도록 하는 할당 방식이다.
단, 객체 내부의 객체는 동일한 메모리 주소를 참조하게 된다.

```js
const obj1 = { ...obj2 };
const obj1 = object.assign({}, obj2);
const obj1 = Array.from(obj2);
```

```js
console.log(obj1 === obj2); //false
```

### 깊은 복사

다른 메모리 주소를 가지도록 하는 할당 방식이다.
단, 객체 내부의 객체는 다른 메모리 주소를 참조하게 된다.

```js
const obj1 = JSON.parse(JSON.stringfy(obj2));
```

```js
console.log(obj1 === obj2); //false
```

### 객체 내부 얕은 복사 VS 깊은 복사

- 얕은 복사
  - 원시 타입: 새로운 객체로 복사
  - 객체 타입: 참조값(메모리 주소) 복사
- 깊은 복사
  - 원시 타입: 새로운 객체로 복사
  - 객체 타입: 새로운 객체로 복사
