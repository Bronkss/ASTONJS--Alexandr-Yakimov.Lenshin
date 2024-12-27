// Продвинутое:
// Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов:
// function reverseStr(str) {
// return …
// }

// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseStr("Hello world"));

// const reverseStrShort = (str) => str.split("").reverse().join("");

// console.log(reverseStrShort("Hello world"));

// Задание 2– Написать функцию глубокого сравнения двух объектов:
// const obj1 = { here: { is: "on", other: "3" }, object: Z };
// const obj2 = { here: { is: "on", other: "2" }, object: Z };
// const deepEqual = (obj1, obj2) => {};

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    obj1 == null ||
    typeof obj1 !== "object" ||
    obj2 == null ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

