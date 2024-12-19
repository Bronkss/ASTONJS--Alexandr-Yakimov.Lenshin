// Написать функцию getLength, принимающую на вход валидное JS значение любого типа.
// Функция должна вывести в консоль длину (length) этого значения, если это возможно, иначе вывести в консоль 0.

function getLength(value) {
  const valueType = typeof userValue;

  switch (valueType) {
    case "bigint":
      const bigintCompatibleValue = String(value);
      console.log(bigintCompatibleValue.length);

      break;
    case "boolean":
      console.log(`0`);
    case "function":
      console.log(value.length);

      break;
    case "number":
      const numberCompatibleValue = String(value);
      console.log(numberCompatibleValue.length);

      break;
    case "object": {
      if (Array.isArray(value)) {
        console.log(value.length);
      } else {
        console.log(`0`);
      }

      break;
    }
    case "string":
      console.log(value.length);

      break;
    case "symbol": {
      const symbolCompatibleValue = value.toString();

      console.log(symbolCompatibleValue.length);
      break;
    }
    case "undefined":
      console.log(`0`);
    default:
      throw new Error("Unknown value of typeof result");
  }
}
