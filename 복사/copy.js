// 얕은 복사
// - 원본 배열과 복사된 배열이 같은 객체를 참조
// - 복사한 배열의 값을 변경하면 원본 배열의 값도 변경됨

let arr = [1, 2, { a: 3 }];
let shallowCopy = arr;

shallowCopy[0] = 10;
shallowCopy[2].a = 100;

console.log("=== shallowCopy ===");
console.log("1", arr == shallowCopy); //true
console.log(arr); // [10, 2, {a: 100}]
console.log(shallowCopy); // [10, 2, {a: 100}]

// 깊은 복사 (1차원 요소)
// - 배열의 1차원 요소만 복사
// - 배열의 요소가 객체라면 해당 객체의 "참조"만 복사
// - 원본 배열과 복사된 배열이 같은 객체를 참조
// - 복사한 배열의 객체값을 변경하면 원본 배열의 객체값도 변경됨

arr = [1, 2, { a: 3 }];
let deepCopy = [...arr]; // 또는 arr.slice() 등

deepCopy[0] = 10;
deepCopy[2].a = 100;

console.log("=== deepCopy ===");
console.log("2", arr == deepCopy);
console.log(arr); // [1, 2, {a: 100}]
console.log(deepCopy); // [10, 2, {a: 100}]

// 깊은 복사(1차원 요소)
// - 2차원 요소가 존재한다면 해당 부분만 shallow copy 진행
arr = [1, 2, { a: [3, 4] }];
let deepCopy_notdeep = [...arr];

deepCopy_notdeep[0] = 10; //1차원: deep(서로 다른 메모리 주소 가짐)
deepCopy_notdeep[2].a[0] = 100; //2차원: shallow(서로 동일한 메모리 주소 가짐)
console.log("=== deepCopy - not depp===");
console.log("3", arr == deepCopy_notdeep);
console.log(arr); // [ 1, 2, { a: [ 100, 4 ] } ]
console.log(deepCopy_notdeep); // [ 10, 2, { a: [ 100, 4 ] } ]

// 깊은 복사 (2단계 깊이까지 복사하고 싶다면)
// - 모든 레벨의 요소를 새로운 메모리 공간에 복사
// - 배열 내에 중첩된 객체, 배열이 있을 때 유용함
// - 원본 배열과 복사한 배열이 독립적으로 동작

arr = [1, 2, { a: [3, 4] }];
let deepDeepCopy = JSON.parse(JSON.stringify(arr));

deepDeepCopy[0] = 10;
deepDeepCopy[2].a[0] = 100;

console.log("=== deepDeepCopy ===");
console.log("4", arr == deepDeepCopy);
console.log(arr); // [1, 2, {a: 3}]
console.log(deepDeepCopy); // [10, 2, {a: 100}]
