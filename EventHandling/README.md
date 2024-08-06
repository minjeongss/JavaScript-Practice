# 이벤트 처리 방식에 대해 분석해보자! 🤖

## 참고 주소

- [이벤트 버블링, 이벤트 캡처, 이벤트 위임](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/)
- [이벤트 위임 장단점](https://ko.javascript.info/event-delegation)
- [requestAnimationFrame](https://inpa.tistory.com/entry/%F0%9F%8C%90-requestAnimationFrame-%EA%B0%80%EC%9D%B4%EB%93%9C)

## 이벤트 할당 방법

### setInterval

- 지연 옵션은 콜백이 반복적으로 실행될 시간을 정하지만, 프레임을 신경 쓰지 않고 동작한다
- 타이머 함수는 프레임 시작 시간에 맞춰 실행됨을 보장하지 못한다

```js
setInterval(function animation() {}, 1000);
```

### requestAnimationFrame(rAF)

- 프레임 시작 시 실행되도록 보장을 해준다

```js
const animation = () => {
  if(재귀 조건){
    requestAnimationFrame(animation);
  }
};
requestAnimationFrame(animation);
```

## 이벤트 감지 방식

### 이벤트 버블링(Event Bubbling)

특정 화면 요소에서 이벤트가 발생했을 때, 해당 이벤트가 최상위의 화면 요소들로 전달되는 특성이다.

```html
<body>
  <div class="one">
    <div class="two">
      <div class="three"></div>
    </div>
  </div>
</body>
```

```js
var divs = document.querySelectorAll("div");
divs.forEach(function (div) {
  div.addEventListener("click", logEvent, {
    capture: false, // default 값
  });
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}
```

three에 해당하는 부분을 클릭하게 되면, three > two > one으로 이벤트가 전달된다.

### 이벤트 캡처(Event Capture)

이벤트 버블링과 반대 방향으로 이벤트가 전달되는 특성이다.
three에 해당하는 부분을 클릭하게 되면, one > two > three로 이벤트가 전달된다.

```js
var divs = document.querySelectorAll("div");
divs.forEach(function (div) {
  div.addEventListener("click", logEvent, {
    capture: true,
  });
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}
```

### 이벤트 버블링, 이벤트 캡처 방지

원하는 화면 요소의 이벤트만 신경쓰고 싶다면 `event.stopPropagation()`을 사용할 수 있다.

```js
divs.forEach(function (div) {
  div.addEventListener("click", logEvent);
});

function logEvent(event) {
  event.stopPropagation();
  console.log(event.currentTarget.className);
}
```

## 이벤트 처리 방식

### 모든 하위 요소에 이벤트 등록하기=forEach

### 하나의 상위 요소에 이벤트 등록하기=**이벤트 위임(Event Delegation)**

- 방식
  하위 요소에 이벤트를 붙이지 않고, 상위 요소에 이벤트를 붙여 하위 요소의 이벤트들을 제어하는 방식이다.

  동적으로 아이템을 추가하거나 아이템의 수가 많은 경우에 유용하게 사용할 수 있다.

  즉, 상위 요소에 이벤트를 붙여 상위 요소의 모든 하위 요소 중 이벤트가 발생하는 요소가 있는지 감시한다. 만일, 특정 하위 요소에서 이벤트가 발생했다면 해당 이벤트 발생을 이벤트 버블링 방식을 통해 상위 요소에게 알리게 된다.

```js
document.body.addEventListener("click", function (event) {
  if (event.target.matches("div")) {
    logEvent(event);
  }
});

function logEvent(event) {
  console.log(event.target.className);
}
```

- 장단점
  - 장점: 많은 핸들러를 할당하지 않아도 되기에, 초기화가 단순하고 메모리가 절약된다
  - 단점
    - 이벤트 위임을 사용하기 위해선 이벤트 버블링 발생이 필수적이나, 일부 이벤트에선 이벤트 버블링이 발생하지 않는다
    - 컨테이너 수준에 할당된 핸들러가 모든 하위 컨테이너에 발생하는 이벤트에 응답해야 하기에, CPU 작업 부하가 늘어날 수 있다
    - 단, 해당 부하는 큰 영향을 미치지 않아 실제로 고려하지는 않는다.

## 이벤트 처리 요소

### 요소 선택

- document.querySelector
- createElement

⇒ 단, class에 .포함

### 자식 요소 선택

- appendChild
- firstElementChild
- children

### classList 추가/제거

- classList.add
- classList.remove

⇒ 단, class에 .포함X

### 이벤트 처리

- addEventListener

## 이벤트: Scroll

### 요소

- scrollHeight: 전체 컨텐츠의 길이
- scrollTop: 최상단에서 현재 보이는 화면 직전까지의 길이
- clientHeight: 현재 보이는 화면의 길이

### 요소 활용

#### 무한 스크롤 UI

스크롤을 진행하며 전체 화면의 마지막에 도달하게 되었을 때, `newLoading()`을 실행하도록 한다.

```js
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 20) {
    newLoading();
  }
});
```
