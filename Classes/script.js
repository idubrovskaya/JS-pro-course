// task 1

class Count {
  constructor(count) {
    this.count = count;
  }

  increment() {
    return ++this.count;
  }

  decrement() {
    return --this.count;
  }

  getCount() {
    return this.count;
  }
}

let counter = new Count(13);

counter.decrement();
counter.increment();
counter.getCount();

console.log('1. Декремент:', counter.decrement());
console.log('1. Инкремент:', counter.increment());
console.log('1. Значение:', counter.getCount());

// task 2

class Worker {
  constructor(name, secondName, rate, days, сountOfDetails) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
    this.сountOfDetails = сountOfDetails;
  }

  getSalary() {
    return this.rate * this.days;
  }

  getName() {
    return this.name;
  }

  getSecondName() {
    return this.secondName;
  }

  getRate() {
    return this.rate;
  }

  getDays() {
    return this.days;
  }

  setRate(rate) {
    return (this.rate = rate);
  }

  setDays(days) {
    return (this.days = days);
  }

  сountOfDetailsOn() {
    return ++this.сountOfDetails;
  }

  resetDetails() {
    return (this.сountOfDetails = 0);
  }
}

let worker = new Worker('Jason', 'Statham', 5000, 15, 10);

console.log('2.', worker);

worker.setDays(22);
worker.getSalary();
worker.resetDetails();

// task 3

class MyString {
  reverse(str) {
    return str.split('').reverse().join('');
  }

  ucFirst(str) {
    return str
      .split('')
      .map((el, index) => (index === 0 ? el.toUpperCase() : el))
      .join('');
  }

  ucWords(str) {
    return str
      .split(' ')
      .map((item) => item.replace(item[0], item[0].toUpperCase()))
      .join(' ');
  }
}

let str = new MyString();
console.log('3. Перевернутая строка:', str.reverse('hello'));
console.log('3. Первая буква заглавная:', str.ucFirst('first letter up'));
console.log('3. Каждое слово с заглавной:', str.ucWords('hello world'));

// task 4

class User {
  constructor(name, surname, email) {
    this.name = name;
    this.surname = surname;
    this._email = email; // нижнее подчеркивание - скрытое свойство
  }

  getFUllName() {
    return this.name + ' ' + this.surname;
  }

  getEmail() {
    return this._email;
  }
}

let user = new User('Irina', 'Dubrovskaya', 'irina.dubrovskaya1995@gmail.com');

console.log('4. Полное имя:', user.getFUllName());
console.log('4. Email:', user.getEmail());

// task 5

class User1 {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }
  getFullName1() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends User1 {
  constructor(name, surname, year) {
    super(name, surname, year);
  }
  getCourse() {
    return new Date().getFullYear() - this.year;
  }
}

let student = new Student('John', 'Doe', 2018);
console.log('5. Имя студента:', student.getFullName1());
console.log('5. Студент на', student.getCourse(), 'курсе');
