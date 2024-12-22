// Продвинутое:
// Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов:
// function reverseStr(str) {
// return …
// }

function reverseStr(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStr("Hello world"));

const reverseStrShort = (str) => str.split("").reverse().join("");

console.log(reverseStrShort("Hello world"));

// Задание 2– Написать функцию глубокого сравнения двух объектов:
// const obj1 = { here: { is: "on", other: "3" }, object: Z };
// const obj2 = { here: { is: "on", other: "2" }, object: Z };
// const deepEqual = (obj1, obj2) => {};

const obj1 = { here: { is: "on", other: "3" }};

const obj2 = { here: { is: "on", other: "2" }};

const deepEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

console.log(deepEqual(obj1, obj2))

