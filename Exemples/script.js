// let users = fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     console.log({ response });
//     return response.json();
//   })
//   .then((value) => {
//     console.log({ value });
//     value.forEach((item) => {
//       let div = document.createElement('div');
//       div.innerHTML = item.username;
//       document.body.append(div);
//     });
//   })
//   .catch((error) => console.log(error));

let pics = fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => {
    console.log({ response });
    return response.json();
  })
  .then((value) => {
    console.log({ value });
    value.forEach((item) => {
      let img = document.createElement('img');
      img.src = item.thumbnailUrl;
      document.body.append(img);
    });
  });
