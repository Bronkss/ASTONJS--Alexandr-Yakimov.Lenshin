// Продвинутый:
// 1. Реализовать полифил (собственную функцию реализующую встроенную в js) метода bind()

const obj = {
  name: "Aleksandr",
};

const a = function (str) {
  console.log(`Hello ${this.name}, ${str}`);
};

Function.prototype.myBind = function (func, ...args) {
  return (...newArgs) => this.apply(func, [...args, ...newArgs]);
};

const b = a.myBind(obj, "you the best!");

b();
