# 이벤트 처리 방식에 대해 분석해보자! 🤖

## 참고 주소

- [이벤트 버블링, 이벤트 캡처, 이벤트 위임](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/)

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

하위 요소에 이벤트를 붙이지 않고, 상위 요소에 이벤트를 붙여 하위 요소의 이벤트들을 제어하는 방식이다.

동적으로 아이템을 추가하거나 아이템의 수가 많은 경우에 유용하게 사용할 수 있다.

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
