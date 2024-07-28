# 비동기 처리에 대해 분석해보자!

## 참고주소

- [비동기 처리](https://inpa.tistory.com/entry/%F0%9F%8C%90-js-async)
- [Promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
- [Promise2](https://learnjs.vlpt.us/async/01-promise.html)
- [Async-Await](https://joshua1988.github.io/web-development/javascript/js-async-await/)

## 동기 VS 비동기

### 동기

각 함수와 코드들이 위에서 아래로 차례대로 동작하는 방식이다.

간단하고 직관적이지만, 작업이 오래 걸리면 다음 응답이 무한 대기를 하여 성능에 악영향을 미친다.

### 비동기

여러 작업을 동시에 처리하는 방식이다.

메인 스레드가 작업을 다른 곳에 보내 처리되게 하고, 해당 작업이 완료되면 콜백 함수를 받아 실행하게 된다.

즉, 작업을 백그라운드에 요청해 처리되게 하여 여러 작업을 동시에 처리하게 한다.

## 싱글 스레드 VS 멀티 스레드

### 싱글 스레드

자바스크립트는 싱글 스레드 언어이다.

자바스크립트를 실행하는 Call Stack은 싱글 스레드이다.

### 멀티 스레드

Web APIs는 멀티 스레드이기에, 싱글 스레드 언어인 자바스크립트가 여러 작업을 동시에 처리하는 것을 가능하게 한다.

## 비동기 처리 기법

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
