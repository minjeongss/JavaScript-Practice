//요소 생성
const make = () => {
  const li = document.createElement("li");
  li.dataset.id = id; //여기에서 설정
  return li;
};

//요소 조회
const search = () => {
  const selectedCard = document.querySelector(`.card[data-id="${curId - 1}"]`);
  return selectedCard;
};
