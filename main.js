// while (true) {
//   setTimeout(() => {
//     let dateNow = new Date();
//     console.log(dateNow);
//   }, 1000);
// }

let hours = document.querySelector("#hours .num");
let minutes = document.querySelector("#minutes .num");
let seconds = document.querySelector("#seconds .num");

setInterval(() => {
  let dateNow = new Date();
  hours.textContent = dateNow.getHours();
  minutes.textContent = dateNow.getMinutes();
  seconds.textContent = dateNow.getSeconds();
}, 1000);
