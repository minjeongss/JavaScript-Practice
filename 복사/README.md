# 복사에 대해 분석해보자! 🤖

## 복사 종류

- 얕은 복사(Shallow Copy)
- 깊은 복사(Deep copy)

## 얕은 복사

동일한 메모리 주소를 참조하는 할당 방식이다.

```js
const obj1 = obj2;
console.log(obj1 == obj2); //true
```

## 깊은 복사

다른 메모리 주소를 가지도록 하는 할당 방식이다.

이때, 할당하는 객체가 1차원 객체인지 2차원 이상 객체인지에 따라 깊은 복사인지의 여부가 결정된다.

1차원 객체인 경우, 객체 전부가 깊은 복사를 진행한다. 하지만 2차원 이상 객체인 경우, 객체 중 1차원 객체만 깊은 복사를 진행하고 2차원 이상 객체는 얕은 복사를 진행한다.

2차원 이상 객체 역시 깊은 복사를 하고 싶은 경우, 직접 값을 할당하거나 JSON,parse, JSON,stringfy를 활용하여 할당해야 한다.

- 1차원 객체 복사
  - 이때, 2차원 이상 객체의 경우 일부만 깊은 복사를 진행한다.

```js
const obj1 = { ...obj2 };
const obj1 = object.assign({}, obj2);
const obj1 = Array.from(obj2);
```

- 2차원 객체 복사

```js
const obj1 = JSON.parse(JSON.stringfy(obj2));
```
