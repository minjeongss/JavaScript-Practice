const $addSessionBtn = document.querySelector(".addSessionBtn");
const $delSessionBtn = document.querySelector(".delSessionBtn");
const $confirmSessionBtn = document.querySelector(".confirmSessionBtn");

let sessionList = [];
const saveToSession = () => {
  sessionList.push({ id: 0, name: "2" });
  sessionStorage.setItem("test2", JSON.stringify(sessionList));
};
const deleteToSession = () => {
  sessionStorage.removeItem("test2");
  sessionList = [];
};
const getFromSession = () => {
  const prevList = JSON.parse(sessionStorage.getItem("test2"));
  if (prevList) {
    sessionList = prevList;
  }
};

$addSessionBtn.addEventListener("click", () => {
  saveToSession();
});
$delSessionBtn.addEventListener("click", () => {
  deleteToSession();
});
$confirmSessionBtn.addEventListener("click", () => {
  alert(JSON.stringify(sessionList));
});

//초기화
const initSession = () => {
  getFromSession();
};
initSession();

/**
 * 상황
 * 1) list [] && localStorage null > init > getFromLocal > list 여전히 [] > addLocalBtn click > saveToLocal
 * 2) list [] && localStorage 값 존재 > init > getFromLocal > list에 localStorage 값 넣기 > 이후 동일
 */
