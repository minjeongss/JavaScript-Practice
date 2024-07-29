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

#### 정의

여러 작업을 동시에 처리하는 방식이다.

메인 스레드가 작업을 다른 곳에 보내 처리되게 하고, 해당 작업이 완료되면 콜백 함수를 받아 실행하게 된다.

즉, 작업을 백그라운드에 요청해 처리되게 하여 여러 작업을 동시에 처리하게 한다.

#### 문제점

비동기로 작업을 처리하면 효율적일 수 있으나, 실행할 작업이 이전 작업의 처리값을 필요로 한다면 동시성 문제가 발생할 수 있다. 비동기적인 작업을 오래 진행할 경우 처리값을 필요할 때 전달하지 못해, 값을 올바르게 할당하지 못하는 경우가 발생한다.

#### 해결법

동시성 문제를 해결하기 위해 콜백 함수, Promise, Async-Await를 활용할 수 있다. 위의 함수들을 통해 순서를 지정해 동시성 문제가 해결된다.

## 싱글 스레드 VS 멀티 스레드

### 싱글 스레드

자바스크립트는 싱글 스레드 언어이다.

자바스크립트를 실행하는 Call Stack은 싱글 스레드이다.

### 멀티 스레드

Web APIs 자체가 멀티 스레드로 구성되어 있기에, 브라우저가 멀티 스레드로 구성되어 있다고 볼 수 있다. 이러한 특성으로 인해 싱글 스레드 언어인 자바스크립트가 여러 작업을 동시에 처리하는 것을 가능하게 한다.

단, 완벽한 멀티 스레딩을 진행한다고 볼 수 없다.(웹 워커 사용 제외) Web APIs를 통해 실행된 함수는 콜백 함수 실행은 Call Stack에 들어가 싱글 스레드로 처리가 되기 때문이다.

이러한 콜백 함수는 동시성 처리 문제를 간단히 해결하기 위해 존재한다.

## 비동기 처리 기법

- 콜백 함수
- Promise
- async, await

## 콜백 함수

함수의 매개변수에 함수 자체를 넘겨, 함수 내에서 매개변수를 실행한다.

구조는 다음과 같이 구성된다.

```js
const getData = (successCallback, errorCallback) => {
  fetch("")
    .then((response) => {
      if (!response.ok) throw new Error("ERROR");
      return response.json();
    })
    .then((data) => successCallback(data))
    .catch((error) => errorCallback(error));
};

getData(
  (data) => console.log(data),
  (error) => console.error(error)
);
```

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
