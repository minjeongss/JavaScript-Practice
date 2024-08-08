const $localInner = document.querySelector(".localInner");
const $addLocalBtn = document.querySelector(".addLocalBtn");

let list = [];
const saveToLocal = () => {
  list.push({ id: 0, name: "test1" });
  localStorage.setItem("test1", JSON.stringify(list));
};
const getFromLocal = () => {
  const prevList = JSON.parse(localStorage.getItem("test1"));
  console.log(prevList);
  if (prevList) {
    list.push(prevList);
  }
};

$addLocalBtn.addEventListener("click", () => {
  saveToLocal();
});

//초기화
const init = () => {
  getFromLocal();
};
init();

/**
 * 상황
 * 1) list [] && localStorage null > init > getFromLocal > list 여전히 [] > addLocalBtn click > saveToLocal
 * 2) list [] && localStorage 값 존재 > init > getFromLocal > list에 localStorage 값 넣기 > 이후 동일
 */
