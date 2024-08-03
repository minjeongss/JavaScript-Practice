const $btns = document.querySelectorAll(".btn");
const $prevBtn = document.querySelector(".prev");
const $nextBtn = document.querySelector(".next");
const $sliderDot = document.querySelector(".slider-dot");
const $dots = $sliderDot.querySelectorAll("span");

//TODO 이벤트 위임 방식으로 변경
$btns.forEach((item) => {
  item.addEventListener("click", () => {
    const $sliderUl = document.querySelector(".slider-ul");

    // $sliderUl.classList.add("move");
    $sliderUl.classList.remove("move");

    //TODO 비동기 처리 없이 애니메이션 효과가 나타나도록 변경
    //TODO 이전 슬라이드 부분이 이동할 때 반짝이는 문제 수정 필요(애니메이션 요소 충돌이 원인)
    setTimeout(() => {
      $sliderUl.classList.add("move");
    }, 0);
  });
});
$dots.forEach((item) => {
  item.addEventListener("click", () => {
    const $sliderUl = document.querySelector(".slider-ul");

    // $sliderUl.classList.add("move");
    $sliderUl.classList.remove("move");

    //TODO 비동기 처리 없이 애니메이션 효과가 나타나도록 변경
    //TODO 이전 슬라이드 부분이 이동할 때 반짝이는 문제 수정 필요(애니메이션 요소 충돌이 원인)
    setTimeout(() => {
      $sliderUl.classList.add("move");
    }, 0);
  });
});
//무한 슬라이드: 이전 버튼
$prevBtn.addEventListener("click", () => {
  //변화된 형태 확인을 위해 전역이 아닌 지역으로 선언
  const $sliderUl = document.querySelector(".slider-ul");
  const $slider = document.querySelectorAll(".slider");

  //삭제
  $sliderUl.removeChild($sliderUl.lastElementChild);

  //할당
  let currSlider = document.createElement("li");
  currSlider.innerHTML = $slider[$slider.length - 1].innerHTML;
  currSlider.classList.add("slider");
  $sliderUl.prepend(currSlider);
});

//무한 슬라이드: 다음 버튼
$nextBtn.addEventListener("click", () => {
  //변화된 형태 확인을 위해 전역이 아닌 지역으로 선언
  const $sliderUl = document.querySelector(".slider-ul");
  const $slider = document.querySelectorAll(".slider");

  //삭제
  $sliderUl.removeChild($sliderUl.firstElementChild);

  //할당
  let currSlider = document.createElement("li");
  currSlider.innerHTML = $slider[0].innerHTML;
  currSlider.classList.add("slider");
  $sliderUl.appendChild(currSlider);
});

//페이지네이션
const handleList = (item) => {
  //sliderIndex, paginationIndex 차이
  //+: 2/1 prev처럼
  //-: 2/4 next처럼
  const $sliderIndex = Number(
    document.querySelectorAll(".slider")[0].innerText
  );
  const $paginationIndex = Number(item.innerText);
  const diffIndex = $sliderIndex - $paginationIndex;
  //! 마이너스 될 수 있음

  switch ($paginationIndex) {
    case 1:
      console.log("diff", diffIndex);
      //2라면 2341 > 1234
      //3이라면 3412 > 2341 > 1234
      for (let i = 0; i < diffIndex; i++) {
        const $slider = document.querySelectorAll(".slider");
        const $sliderUl = document.querySelector(".slider-ul");
        //삭제
        $sliderUl.removeChild($sliderUl.lastElementChild);

        //할당
        let currSlider = document.createElement("li");
        currSlider.innerHTML = $slider[$slider.length - 1].innerHTML;
        currSlider.classList.add("slider");
        $sliderUl.prepend(currSlider);

        console.log(currSlider);
      }
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
  }
};
$dots.forEach((item) => {
  item.addEventListener("click", () => {
    handleList(item);
  });
});
