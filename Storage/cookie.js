const $addCookieBtn = document.querySelector(".addCookieBtn");
const $delCookieBtn = document.querySelector(".delCookieBtn");
const $confirmCookieBtn = document.querySelector(".confirmCookieBtn");

const saveToCookie = () => {
  //시간 제한
  //- expire
  //-max-age
  document.cookie = "user=Minjeong; path=/; max-age=3600;";
};
const deleteToCookie = () => {
  document.cookie = "user=Minjeong; path=/; max-age=0";
  //! 삭제할 때, 생성한 조건과 동일하게 설정하며 max-age만 0으로 변경해야 한다
};
const getFromCookie = () => {
  console.log(document.cookie);
};

$addCookieBtn.addEventListener("click", () => {
  saveToCookie();
});
$delCookieBtn.addEventListener("click", () => {
  deleteToCookie();
});
$confirmCookieBtn.addEventListener("click", () => {
  alert(document.cookie);
});

//초기화
const initCookie = () => {
  getFromCookie();
};
initCookie();
