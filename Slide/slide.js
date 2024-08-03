const $btn = document.querySelectorAll(".btn");
const $prevBtn = document.querySelector(".prev");
const $nextBtn = document.querySelector(".next");

//TODO 이벤트 위임 방식으로 변경
$btn.forEach((item) => {
  item.addEventListener("click", () => {
    const $sliderUl = document.querySelector(".slider-ul");

    $sliderUl.classList.remove("move");

    //TODO 비동기 처리 없이 애니메이션 효과가 나타나도록 변경
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
