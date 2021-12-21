// Task 1

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squareArr = arr1.map((item) => item ** 2);
console.log('1. Элементы в квадрате:', squareArr);

// Task 2

let arr2 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 7, 8, 9, 12, 36];

let sumArr = arr2.reduce((sum, item) => sum + item, 0);

console.log('2. Сумма элементов массива:', sumArr);

// Task 3

function colonOdd(num) {
  let array = num.toString().split('');
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] % 2 && array[i] % 2) {
      array.splice(i, 0, ':');
    }
  }
  return array.join('');
}

console.log('3. Двоеточие между нечетными числами:', colonOdd(1222333));

//Task 4

let array01 = [1, 2, 3, 4, 5];
let array02 = [1, 7, 8, 9, 5, 6, 3, 7];
let newArr = [];

function difOfElements(array01, array02) {
  let length =
    array01.length >= array02.length ? array01.length : array02.length;

  for (let i = 0; i < length; i++) {
    let el01 = array01[i] === undefined ? 0 : array01[i];
    let el02 = array02[i] === undefined ? 0 : array02[i];
    newArr.push(el01 - el02);
  }
  return newArr;
}

console.log('Массив 1:', array01);
console.log('Массив 2:', array02);
console.log('4. Разность элементов массивов:', difOfElements(array01, array02));

// Task 5

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 7, 8, 9, 5, 6, 3, 7];
let newArray = [];

function sumOfElements(array1, array2) {
  let length = array1.length >= array2.length ? array1.length : array2.length;

  for (let i = 0; i < length; i++) {
    let el1 = array1[i] === undefined ? 0 : array1[i];
    let el2 = array2[i] === undefined ? 0 : array2[i];
    newArray.push(el1 + el2);
  }
  return newArray;
}

console.log('Массив 1:', array1);
console.log('Массив 2:', array2);
console.log('5. Сумма элементов массивов:', sumOfElements(array1, array2));

// Task  6

let arr6 = [1, 2, 3, 4, 5];
let reverseArr = arr6.toString().split('').reverse().join('');

console.log('Исходный массив', arr6);
console.log('6. Перевернутый массив: ', reverseArr);

// Task 7

let users = [
  { name: 'Peter', age: 30 },
  { name: 'Kate', age: 18 },
  { name: 'John', age: 12 },
  { name: 'Tom', age: 9 },
];

function splitArrays(users) {
  let adults = [];
  let minors = [];
  users.forEach((person) =>
    person.age >= 18 ? adults.push(person) : minors.push(person)
  );
  return { adults, minors };
}

console.log('7.', splitArrays(users));

// Task 8

let arr8 = [1, 2, 3, 4, 5, 6, 1, 2, 8, 7, 9, 3, 4, 7, 12];

let newArr8 = [];
arr8.forEach((item) => {
  if (!newArr8.includes(item)) {
    newArr8.push(item);
  }
});
console.log('8. Массив без дубликатов:', newArr8);

// Task 9

function checkPalindrom(str) {
  str = str.toUpperCase().replace(/\s+/g, '');
  return str === str.split('').reverse().join('');
}

console.log(
  '9. Является ли строка палиндромом?',
  checkPalindrom('А путана тупа')
);

// Task 10

function findIndex(arr, element) {
  let rez = -1;
  arr.forEach((el, index) => {
    if (rez !== -1) {
      return;
    }
    if (el === element) {
      rez = index;
    } else {
      rez = -1;
    }
  });
  return rez;
}

console.log('10. Индекс элемента:', findIndex([1, 2, 3, 4, 5], 3));

// Task 11

function search(arr, element) {
  return arr.filter((el) => el.toLowerCase().includes(element.toLowerCase()));
}

console.log(
  '11. Поиск подходящих имен:',
  search(['Ivan', 'Misha', 'Dima', 'Dasha'], 'sh')
);

function searchArr(arr, searchText) {
  let rezArr = arr.reduce((prev, curr) => {
    if (curr.toLowerCase().includes(searchText.toLowerCase())) {
      prev.push(curr);
      // return prev.concat(curr)
    }
    return prev;
  }, []);

  return rezArr;
}

console.log('11.', searchArr(['Ivan', 'Misha', 'Dima', 'Dasha'], 'sh'));

// Task 12

function checkArrays(arr0001, arr0002) {
  return (
    arr0001.length === arr0002.length &&
    arr0001.every((value, index) => value === arr0002[index])
  );
}
console.log('12. Одинаковые ли массивы:', checkArrays([1, 2, 3, 4], [1, 2]));
