# 슬라이드를 제작해보자 🤖

## 참고 주소

- [querySelectorAll](https://ko.javascript.info/searching-elements-dom)
- [NodeList VS HTMLCollection](https://yung-developer.tistory.com/79)
- [requestAnimationFrame](https://inpa.tistory.com/entry/%F0%9F%8C%90-requestAnimationFrame-%EA%B0%80%EC%9D%B4%EB%93%9C)

## 목표

VanillaJS로 슬라이드를 제작한다.

1.  무한 슬라이드

    - 이전 버튼

      - 구성: 8 < 1 < 2로 구성
      - 이전 버튼 클릭: 7 < 8 < 1

    - 다음 버튼
      - 구성: 7 < 8 < 1로 구성
      - 다음 버튼 클릭: 8 < 1 < 2

2.  페이지네이션
    - 버튼 누르면 해당 인덱스의 슬라이드가 메인으로 가도록 구성
3.  반응형
    - resize되었을 때 이전 슬라이드 가로값 활용

## 진행 과정

1. 데이터 처리

- queue의 동작 원리와 동일하게, 슬라이드 카드 요소들을 활용

2. 애니메이션 처리
   - 앞, 뒤 버튼 누르면 슬라이드 이동
   - 페이지네이션 버튼 누르면 슬라이드 이동

## 해결 시도 과정: 초기화

### 방식

애니메이션 적용을 위해 메인이 되는 슬라이드 카드의 인덱스가 0이 아닌 1로 구성을 하였다.

#### 1차 시도

초기화를 할 때, html의 경우 구성이 1>2>3>4로 이루어져 있기에 슬라이드 카드 중 2가 먼저 보이게 된다.
하지만 우리가 희망하는 것은 슬라이드 카드 중 1이 먼저 보이게 되는 것이다.

```js
handlePrevMove(1);
```

➡️ 문제는 2에서 1로 이동하는 부분이 보인다.

#### 2차 시도

초기화를 할 때, 슬라이드를 앞으로 이동하고 난 후 hidden을 삭제하여 완성된 슬라이드를 보여준다.

```js
document.addEventListener("DOMContentLoaded", () => {
  const $sliderUl = document.querySelector(".slider-ul");

  // 슬라이더를 숨기기
  $sliderUl.classList.add("hidden");

  handlePrevMove(1);

  // 슬라이더를 다시 보이기
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // 슬라이더를 다시 보이기
      $sliderUl.classList.remove("hidden");
      $sliderUl.style.transition = "none";
      $sliderUl.style.transform = "translateX(-25%)";
      updatePagination(); // 초기 페이지네이션 상태 설정
    });
  });
});
```

➡️ 문제는 버튼을 눌렀을 때 슬라이드 이동 자체가 진행되지 않는다.

## 해결 시도 과정: 무한 슬라이드

### 방식

#### 1차 시도

유사 배열 객체 > 배열로 변환하여 연산한다.

```
- prevBtn:  pop, unshift
- nextBtn:  shift, push
```

#### 2차 시도

유사 배열 객체를 유지하여 연산한다.

```
- prevBtn: createElement > appendCHild
- nextBtn: createElement > prepend
```

➡️ 문제는 버튼을 누를수록 크기가 작아진다.

#### 3차 시도

removeChild를 먼저 실행해, 요소의 개수를 유지한다.
이때, 1차 시도에서 생각한 배열 처리 방식을 활용했다.

### 이동

#### 문제

- 슬라이드 위치와 애니메이션 간 충돌이 발생했다.
- handlePrevMove-handleNextMove가 중복으로 호출되어 이동 거리 이상이 발생했다.

#### 해결

requestAnimationFrame() API를 사용하여, 모든 이동이 완료하면 다음 이동을 진행할 수 있도록 통제했다.

- 첫 번째 requestAnimationFrame
  - 다음 렌더링 사이클 전 적용
  - transform: translateX(-50%), transition: none
- 두 번째 requestAnimationFrame
  - 첫 번째 변경이 렌더링 사이클 동안 적용된 후 실행
  - transform: translateX(-25%), transition: transform 0.5s ease

```js
const handlePrevMove = (changeCount) => {
  //생략
  $sliderUl.style.transition = "none";
  $sliderUl.style.transform = "translateX(-50%)";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      $sliderUl.style.transition = "transform 0.5s ease";
      $sliderUl.style.transform = "translateX(-25%)";
      $sliderUl.addEventListener(
        "transitionend",
        () => {
          isAnimating = false;
          updatePagination();
        },
        { once: true }
      );
    });
  });
};
```

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

### 이동

#### 문제

2칸 이상 이동이 불가능하다. 1칸 이동만 가능하다.

```js
const handlePagination = (item) => {
  let diffIndex = handlePageIndex(item);
  if (diffIndex < 0) {
    diffIndex = Math.abs(diffIndex);
    console.log(diffIndex);
    for (let i = 0; i < diffIndex; i++) {
      handleNextMove();
    }
  } else if (diffIndex > 0) {
    for (let i = 0; i < diffIndex; i++) {
      handlePrevMove();
    }
  }
};
```

#### 해결

handlePagination 안에서 for문을 활용해 handleNextMove()를 진행하자, 의도와 다르게 행동을 했다.

해당 for문을 handleNextMove() 내로 이동하여, 이동해야 하는 diffIndex를 파라미터로 전달해 for문을 돌도록 진행했다.

```js
const handleNextMove = (changeCount) => {
  if (isAnimating) return;
  isAnimating = true;

  const $sliderUl = document.querySelector(".slider-ul");
  const $slider = document.querySelectorAll(".slider");

  for (let i = 0; i < changeCount; i++) {
    const firstElement = $sliderUl.firstElementChild.cloneNode(true);
    console.log(firstElement);
    $sliderUl.removeChild($sliderUl.firstElementChild);
    $sliderUl.appendChild(firstElement);
  }
  $sliderUl.style.transition = "none";
  $sliderUl.style.transform = "translateX(0)";

  //이하 생략
};
```
