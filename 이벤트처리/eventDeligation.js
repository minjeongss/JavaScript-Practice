//이벤트 처리 방법
//1. 모든 li에 이벤트 등록하기=forEach
const $li = document.querySelectorAll(".con>li");
console.log($li);
$li.forEach((list, index, arr) => {
  list.addEventListener("click", (e) => {
    console.log(list);
    $li.forEach((item) => {
      if (!item) return;
      item.classList.remove("focus");
    });
    list.classList.add("focus");
  });
});

//2. 상위의 ul에 이벤트 등록하기=이벤트 위임
const $con = document.querySelector(".con");
const $conLi = $con.firstElementChild;

//- 초기 설정
$conLi.classList.add("focus");

//- 클릭한 경우 설정
$con.addEventListener("click", (e) => {
  //기존에 존재하는 focus class 제거
  const $currentConLi = $con.querySelector(".focus"); //전체 컨테이너를 기준으로 해야 함에 유의!
  console.log("currentConLi", $currentConLi);
  if ($currentConLi) {
    $currentConLi.classList.remove("focus");
  }

  //필요한 부분에 focus class 할당
  const $li = e.target.closest("li");
  if (!$li) return;
  $li.classList.add("focus");
});
