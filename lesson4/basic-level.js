/**
Для выполнения задания создаем новую ветку в вашем репозитории с именованием - feat/homeWork-04 +
Код пишем в ней. После выполнения дз - создаём пул-руквест в master (или main, у кого как) - прикрепляем ссылку на ПР к сдаче задания.
Базовый:
1. Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько
структур данных? Какие ?

2. Привязать контекст объекта:
const obj = { item: 'some value' }
к функции logger:
function logger() {
  console.log(`I output only external context: ${this.item}`);
}
так, чтобы при вызове функции ${this.item} имело значение - 'some value' (Привязать через bind, call, apply)
 */



/**
 * Ответ на вопрос по массивам:
  По задумке длина массива должна быть неизменной. Для того, чтобы добавить элемент в массив, нужно создать
новый массив длиннее старого на 1 элемент, затем скопировать в него все значения старого массива и в качестве последнего
элемента указать новое значение. В JavaScript, структура данных - массив совмещает в себе две другие структуры данных, такие как стек и очередь. 
 */



const obj = {
  item: "some value",
};

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

logger.call(obj);
logger.apply(obj);

const logObj = logger.bind(obj);

logObj();
