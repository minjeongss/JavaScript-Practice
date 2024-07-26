# 비동기 처리에 대해 분석해보자!

## 참고주소

- [Promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
- [Promise2](https://learnjs.vlpt.us/async/01-promise.html)
- [Async-Await](https://joshua1988.github.io/web-development/javascript/js-async-await/)

## 정의

## 활용

- Promise
- async, await

## Promise

상태는 세 가지로 분리된다.

- 대기
- 이행(resolve)
- 실패(reject)

구조는 다음과 같이 구성된다.

```js
const getData = () => {
  return new Promise((resolve, reject) => {
    fetch("")
      .then((response) => {
        if (!response.ok) throw new Error("ERROR");
        return response;
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

getData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

## Async, Await

구조는 두 가지로 분리된다.

- 함수명(async)
- 비동기 처리 메서드명(await)

예외 처리는 두 가지로 분리된다.

- try
- catch

구조는 다음과 같이 구성된다.

```js
const getData = async () => {
  try {
    const response = await fetct("");
    if (!response.ok) throw new Error("ERROR");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
```
