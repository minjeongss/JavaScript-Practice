# 배열에 대해 분석해보자 🤖

## forEach

- Vanilla JS

```js
let arrayStr = [];
array.forEach((elem, index) => {
  if (typeof elem === "string") {
    arrayStr.push(elem);
  } else {
    arrayStr.push(elem.toString());
  }
});
```

- TypeScript

```ts
let arrayStr: string[] = [];
array.forEach((elem, index) => {
  if (typeof elem === "string") {
    arrayStr.push(elem);
  }
});
```

## map

- Vanilla JS

```js
let arrayStr = array.map((elem) => {
  if (typeof elem === "string") {
    return elem;
  } else {
    return elem.toString();
  }
});
```

- ts

```ts
let arrayStr2: String[] = array
  .filter((elem) => typeof elem === "string")
  .map((elem) => elem);
```

## forEach VS map

- return값 존재
  - forEach: X
  - map: O, 새로운 배열 반환
- 원본 배열 변경
  - forEach: X
  - map: X

즉, forEach는 단순 반복문을 위한 용도이고 map은 기존의 배열을 바탕으로 새로운 배열을 생성하기 위한 용도이다.
