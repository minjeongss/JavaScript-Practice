/**
 * 클로저: inner
 *
 * 외부 함수: outer
 * 중첩 함수: inner
 */
function outer() {
  const x = 10;

  const inner = function () {
    console.log(x);
  };

  return inner;
}

const innerFunction = outer();
innerFunction(); //10
