const $addLocalBtn = document.querySelector(".addLocalBtn");
const $delLocalBtn = document.querySelector(".delLocalBtn");
const $confirmLocalBtn = document.querySelector(".confirmLocalBtn");
let localList = [];
const saveToLocal = () => {
  localList.push({ id: 0, name: "test1" });
  localStorage.setItem("test1", JSON.stringify(localList));
};
const deleteToLocal = () => {
  localStorage.removeItem("test1");
  localList = [];
};
const getFromLocal = () => {
  const prevList = JSON.parse(localStorage.getItem("test1"));
  if (prevList) {
    localList = prevList;
  } else {
    localList = [];
  }
};

$addLocalBtn.addEventListener("click", () => {
  saveToLocal();
});
$delLocalBtn.addEventListener("click", () => {
  deleteToLocal();
});
$confirmLocalBtn.addEventListener("click", () => {
  alert(JSON.stringify(localList));
});

//초기화
const initLocal = () => {
  getFromLocal();
};
initLocal();

/**
 * 상황
 * 1) list [] && localStorage null > init > getFromLocal > list 여전히 [] > addLocalBtn click > saveToLocal
 * 2) list [] && localStorage 값 존재 > init > getFromLocal > list에 localStorage 값 넣기 > 이후 동일
 */
