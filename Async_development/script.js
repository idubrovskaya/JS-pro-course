// task 1

let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('Выполнено успешно!');
  }, 3000);
}).then(() => console.log('Выполнено успешно через 3 секунды!'));

//task 2

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Ошибка!'));
  }, 3000);
}).catch(() => console.error('Ошибка через 3 секунды!'));

// task 3

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let prom1 = new Promise(function (resolve, reject) {
  let delay = randomInteger(1, 5);

  setTimeout(resolve, delay * 1000, delay);
  return console.log('Задержка prom1:', delay);
});

let prom2 = new Promise(function (resolve, reject) {
  let delay = randomInteger(1, 5);

  setTimeout(resolve, delay * 1000, delay);

  return console.log('Задержка prom2:', delay);
});

let prom3 = new Promise(function (resolve, reject) {
  let delay = randomInteger(1, 5);

  setTimeout(resolve, delay * 1000, delay);

  return console.log('Задержка prom3:', delay);
});

Promise.all([prom1, prom2, prom3]).then((delays) => {
  let sum = delays.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
  console.log('Сумма задержек:', sum);
});

// task 4
let url = 'https://jsonplaceholder.typicode.com/users';

let users = fetch(url)
  .then((response) => response.json())
  .then((value) => {
    return value.filter((users) => {
      return users.id % 2 === 0;
    });
  })
  .then((rez) => console.log(rez));

// вариант 2

async function filterUsers() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let users = await response.json();
  let filter = users.filter((users) => {
    return users.id % 2 === 0;
  });
  console.log(filter);
}
filterUsers();

// task 5, 6

let allUsers = fetch(url).then((res) => res.json());
console.log(allUsers);

let div = document.createElement('div');
div.setAttribute('id', 1);

let inputGroup = document.createElement('div');
inputGroup.classList.add('input-group', 'mb-3', 'mt-3', 'w-50', 'mx-auto');
let input = document.createElement('input');
input.classList.add('form-control');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Enter user');
let btn = document.createElement('button');
btn.classList.add('btn', 'btn-info');
btn.setAttribute('type', 'button');
btn.setAttribute('id', 'button-search');
btn.innerText = 'Search';

div.append(inputGroup);
inputGroup.append(input, btn);

btn.addEventListener('click', userSearch);

async function userSearch() {
  let response = await fetch(url);
  let data = await response.json();
  let search = data.filter((el) => {
    if (
      el.name.toLowerCase().includes(input.value.toLowerCase()) ||
      el.phone.toLowerCase().includes(input.value.toLowerCase()) ||
      el.email.toLowerCase().includes(input.value.toLowerCase())
    ) {
      return el;
    }
  });
  createCard(search);
}

function createCard(value) {
  div.innerHTML = '';
  div.append(inputGroup);
  let cards = document.createElement('div');
  cards.classList.add('row');
  div.append(cards);
  document.body.append(div);

  value.forEach((item) => {
    let wrapper = document.createElement('div');
    wrapper.classList.add('col-sm-4', 'mb-3');
    let cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card');
    let card = document.createElement('div');
    card.classList.add('card-body');
    let name = document.createElement('h3');
    name.innerText = item.name;
    let address = document.createElement('p');
    address.innerHTML = `<b>Address:</b> ${item.address.city}, ${item.address.street}, ${item.address.suite}`;
    let phone = document.createElement('p');
    phone.innerHTML = `<b>Phone:</b> ${item.phone}`;
    let company = document.createElement('p');
    company.innerHTML = `<b>Company name:</b> ${item.company.name}`;
    let email = document.createElement('p');
    email.innerHTML = `<b>Email:</b> ${item.email}`;
    let website = document.createElement('p');
    website.innerHTML = `<b>Website:</b> ${item.website}`;

    cards.append(wrapper);
    wrapper.append(cardWrapper);
    cardWrapper.append(card);
    card.append(name, address, phone, company, email, website);
  });
}

async function getUsers() {
  let response = await fetch(url);
  let data = await response.json();
  createCard(data);
}

//getUsers(url);

// task 7

let div2 = document.createElement('div');
div2.setAttribute('id', 2);
document.body.append(div2);

async function getToDoList() {
  let userId = prompt('Enter id');
  let url = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
  let response = await fetch(url);
  let data = await response.json();
  //console.log(data);

  createList(data);
}

function createCheckBox(status, title) {
  let task = document.createElement('div');
  task.classList.add('form-check', 'pr-3');

  let input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', 'flexCheckDefault');
  input.classList.add('form-check-input');

  let label = document.createElement('label');
  label.innerText = title;
  label.setAttribute('for', 'flexCheckDefault');
  label.classList.add('form-check-label');

  task.append(input, label);

  if (status === true) {
    input.setAttribute('checked', 'checked');
  }
  return task;
}

function createList(data) {
  let card = document.createElement('div');
  card.classList.add('col-sm-5', 'mx-auto');
  let title = document.createElement('h2');
  title.innerText = 'TODO List:';
  title.classList.add('my-3');
  card.append(title);
  let list = document.createElement('div');
  list.classList.add('card', 'mx-auto');

  data.forEach((el) => {
    div2.append(card);

    card.append(list);
    list.append(createCheckBox(el.completed, el.title));
  });
}
//getToDoList();

//task 8

let div3 = document.createElement('div');
div3.setAttribute('id', 3);
document.body.append(div3);

let img = document.createElement('img');

async function getPhotos() {
  let url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
  let promise = await fetch(url);
  let data = await promise.json();
  //console.log(data);
  createPics(data);
}

function createPics(data) {
  data.forEach((item) => {
    let img = document.createElement('img');
    img.src = item.thumbnailUrl;
    div3.append(img);
    img.addEventListener('click', (event) => {
      if (event.target.tagName === 'IMG') {
        event.target.src = item.url;
      }
    });
  });
}

//getPhotos();

// task 9

let div4 = document.createElement('div');
div4.setAttribute('id', 4);
document.body.append(div4);

async function getAlbums() {
  let url = 'https://jsonplaceholder.typicode.com/albums';
  let promise = await fetch(url);
  let data = await promise.json();
  console.log(data);
}

function createAlbums(album) {
  album.forEach((element) => {
    let ul = document.createElement('ul');
    ul.classList.add('list-group');

    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = element.title;

    ul.append(li);
  });
}

async function getPics() {
  let url = 'https://jsonplaceholder.typicode.com/photos';
  let promise = await fetch(url);
  let data = await promise.json();
  console.log(data);
}
// getAlbums();
// getPics();
