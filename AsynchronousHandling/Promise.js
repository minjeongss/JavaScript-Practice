// 기본
const increaseAndPrint = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = num + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueISFive";
        reject(error);
        return;
      }
      resolve(value);
    }, 1000);
  });
};
increaseAndPrint(4)
  .then((data) => console.log(data))
  .catch((e) => console.error(e));

// 외부 API 연동
const getData = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request Fail!");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
