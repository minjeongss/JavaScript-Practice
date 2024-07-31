# 클래스(Class)에 대해 분석해보자! 🤖

## 참고 주소

- [setter-getter](https://think0wise.tistory.com/27)

## 구조

- costructor(생성자)
- setter, getter
  - set a()
  - get a()
- 일반 메서드
  - normalFunction()

```js
class Name {
  costructor(a, b) {
    this.a = a;
    this.b = b;
  }
  set a(){
    _this.a=a;
  }
  get a(){
    return _this.a;
  }
  normalFunction=()=>{
    return this.a+this.b;
  }
}
```

## 상속

extends 키워드를 사용한다.

```js
class SpecificName extends Name {
  constructor(a, b) {
    super(a, b);
  }
}
```

## 접근자

#를 변수 앞에 붙여 사용한다.

```js
class Name {
  #a=0;
  costructor(a, b) {
    this.#a = a;
    this.b = b;
  }
  set a(){
    this.#a=a;
  }
  get a(){
    return this.#a;
  }
  normalFunction=()=>{
    return this.#a+this.b;
  }
}
```
