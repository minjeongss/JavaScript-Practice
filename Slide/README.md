# 슬라이드를 제작해보자 🤖

## 참고 주소

- [querySelectorAll](https://ko.javascript.info/searching-elements-dom)

## 목표

VanillaJS로 슬라이드를 제작한다.

1.  무한 슬라이드
    1-1. 이전 버튼 - 구성: 8 < 1 < 2로 구성 - 이전 버튼 클릭: 7 < 8 < 1
    1-2. 다음 버튼 - 구성: 7 < 8 < 1로 구성 - 다음 버튼 클릭: 8 < 1 < 2

2.  페이지네이션
    - 버튼 누르면 해당 인덱스의 슬라이드가 메인으로 가도록 구성
3.  반응형
    - resize되었을 때 이전 슬라이드 가로값 활용

## 해결 시도 과정: 무한 슬라이드

### 방식

#### 1차 시도

유사 배열 객체 > 배열로 변환하여 연산한다.

- prevBtn pop, unshift
- nextBtn shift, push

#### 2차 시도

유사 배열 객체를 유지하여 연산한다.

- prevBtn createElement > appendCHild
- nextBtn createElement > prepend

➡️ 문제는 버튼을 누를수록 크기가 작아진다.

#### 3차 시도

removeChild를 먼저 실행해, 요소의 개수를 유지한다.
이때, 1차 시도에서 생각한 배열 처리 방식을 활용함

## 해결 시도 과정: 페이지네이션

### 방식

#### 1차 시도

```js
const $sliderDot = document.querySelector(".slider-dot");
const $dots = $sliderDot.children;
$dots.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item);
  });
});
```

➡️ `$dots`가 HTMLCollection에 해당되어, forEach 사용이 불가능하다.
`$btns`은 NodeList에 해당되어, forEach 사용이 가능하다.

#### 2차 시도

```js
const $dots = $sliderDot.querySelectorAll("span");
```
