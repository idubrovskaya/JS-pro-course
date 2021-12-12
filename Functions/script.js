// task 1

function sum() {
  let counter = 0;
  for (let i = 0; i < arguments.length; i++) counter += arguments[i];
  return counter;
}
console.log('1. Сумма чисел:', sum(1, 2, 3, 4, 5, 6));

// task 2

function findIndex(arr, el) {
  arr.forEach((element, index) =>
    el === element ? (rez = index) : (rez = -1)
  );
  return rez;
}

console.log(
  '2. Индекс элемента:',
  findIndex([1, 2, 3, 4, 9, 8, 6, 3, 1, 4], 6)
);

// task 3

function makeCounter() {
  let count = 1;

  return function () {
    return (count++) ** 2;
  };
}

let counter = makeCounter();

console.log('3. Количество вызовов в квадрате:', counter());
console.log('3. Количество вызовов в квадрате:', counter());
console.log('3. Количество вызовов в квадрате:', counter());
console.log('3. Количество вызовов в квадрате:', counter());
console.log('3. Количество вызовов в квадрате:', counter());

// task 4

function splitArray(arr, amount) {
  let arrays = [];
  while (arr.length > 0) {
    arrays.push(arr.splice(0, amount));
  }
  return arrays;
}

console.log(
  '4. Массив, разделенный на части',
  splitArray([1, 2, 3, 4, 5, 6, 7], 2)
);

// task 5

function kebabCase(str) {
  return str.replace(/ /g, '-').toLowerCase();
}

console.log('5. Kebab-case:', kebabCase('Hello dear hell'));
