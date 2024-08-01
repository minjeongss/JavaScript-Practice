# 객체(Object)에 대해 분석해보자 🤖

## 참고 주소

- [유사 배열 VS 배열](https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2)
- [유사 배열 VS 배열 2](https://www.howdy-mj.me/javascript/array-and-array-like-object-and-iterable)

## 유사 배열 객체 VS 배열

### 배열

자료구조에서 말하는 배열은 하나의 데이터 타입으로 통일되어 있으며, 서로 연속적으로 이어져 있다.

자바스크립트에서의 배열은 자료구조의 배열과 달리, 동일한 크기의 동일한 메모리 공간을 가지지 않고 연속적으로 이어져 있지 않아도 괜찮다.

즉, 일반적 배열의 동작을 흉내 낸 특수한 객체이다.
일반 객체와 달리 인덱스와 length라는 속성을 가지고 있다. Array.prototype을 상속받아 배열 메서드를 사용할 수 있다.

### 유사 배열 객체

유사 배열 객체는 []로 감싸진 형태이며, key가 숫자이고 length라는 속성을 가지고 있다. 배열과 유사한 성질을 지니나, Array.prototype을 상속받지 않아 메서드 사용이 불가능하고 일반 객체처럼 속성으로 접근할 수 없다.

### 유사 배열 객체에서 배열 메서드 사용

기존의 유사 배열 객체는 배열의 메서드 사용이 불가능하다.

- forEach
- map
- filter
- reduce

하지만 다음과 같이 Array.prptotrpe 메서드를 빌려와 사용하거나 배열로 변환하면 사용이 가능하다.

- call
- apply
- Array.from
