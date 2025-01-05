/**
 * increase(), decrease()의 상위 스코프: 즉시 실행 함수
 *
 * 즉시 실행 함수의 num: 상위 함수의 변수
 *   - increase()에서 num을 참조함
 *   - decrease()에서 num을 참조함
 *
 * 정보 은닉: 즉시 실행 함수에 존재하기에, 외부에서 접근이 불가능함
 *   - increase()에서만 num 접근 가능
 *   - decrease()에서만 num 접근 가능
 */
const counter = (function () {
  let num = 0;

  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(counter.increase()); //1
console.log(counter.decrease()); //0
