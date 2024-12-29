/**
 * 실행 컨텍스트 등록 과정
 *
 * 1. 전역 코드 평가 및 실행
 *  - 평가(선언문 실행): 전역 변수 x,y, 전역 함수 globalFunction 전역 실행 컨텍스트에 등록
 *  - 실행(소스코드 실행): 전역 변수 x에 값 할당, 전역 함수 globalFunction 호출
 * 2. 전역 함수 평가 및 실행
 *  - 평가: 지역 변수 x,y, 중첩 함수 localFunction 함수 실행 컨텍스트에 등록
 *  - 실행: 지역 변수 x,y에 값 할당, 중첩 함수 localFunction 호출
 * 3. 지역 함수 평가 및 실행
 *  - 평가: 지역 변수 z 함수 실행 컨텍스트 등록
 *  - 실행: 지역 변수 z에 값 할당, 메서드 호출
 * 4. 전역 함수로 복귀
 * 5. 전역 코드로 복귀
 */

// 전역 변수 선언
const x = 1;
const y = 2;

// 함수 정의
function globalFunction() {
  // 지역 변수 선언
  const x = 10;
  const y = 20;

  function localFunction() {
    // 지역 변수 선언
    const z = 30;

    // 메서드 호출
    console.log(x + y + z);
  }

  localFunction();
}

// 함수 호출
globalFunction();

/**
 * 실행 결과
 *
 * 30
 */
