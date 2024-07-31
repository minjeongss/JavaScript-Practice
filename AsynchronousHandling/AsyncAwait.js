// 기본
function fetchItems() {
  return new Promise(function (resolve, reject) {
    var items = [1, 2, 3];
    resolve(items);
  });
}

const logItems = async () => {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
};

logItems();

// 외부 API 연동
const getData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Request Fail");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
getData();
