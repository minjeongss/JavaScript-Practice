# Dataset에 대해 분석해보자 🤖

## 참고 주소

- [데이터 속성 사용하기](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes)

## 데이터 속성이란

HTML에 사용자가 정의한 의미를 가지는 정보를 저장할 수 있도록 해주는 속성이다.

## 사용법

### HTML에서 선언하기

```html
<aritlcle data-id="0"></article>
```

### JS에서 접근하기

#### 요소 생성

```js
const li = document.createElement("li");
li.dataset.id = id; //여기에서 설정
return li;
```

#### 요소 조회

```js
const $article = document.querySelector("article");
$article.dataset.id;
```

#### 요소 조건으로 조회

```js
const selectedCard = document.querySelector(`.card[data-id="${curId - 1}"]`);
return selectedCard;
```

### CSS에서 접근하기

```css
article::before {
  content: attr(data-id);
}
article[data-id="0"] {
  /*속성 적용*/
}
```
