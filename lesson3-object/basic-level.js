// Задание 1 – Создать объект counter всеми возможными способами;

const counter = { firstName: "Alex" };

const counterTwo = new Object({});

const counterThree = Object.create({ firstName: "Alex" });

const counterFour = Object.assign({}, counter);





// Задание 2 – Скопировать объект counter всеми возможными способами;

const counterCopy = Object.assign({}, counter);

const counterTwoCopy = { ...counterTwo };

// Испоьзуем библиотеку klona
import { klona } from "klona/full";
const counterThreeCopy = klona(counterThree);

// Используем библиотеку lodash
const _ = require("lodash.clonedeep");
let deepClone = _.cloneDeep(counter);

const counterFourCopy = JSON.stringify(counterFour);





// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

function makeCounter() {}

const makeCounter = function () {};

const makeCounter = function makeCounterRef() {};

const makeCounter = (firstNum, secondNum) => firstNum + secondNum;
