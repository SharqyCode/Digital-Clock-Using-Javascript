let hours = document.querySelector("#hours .num");
let minutes = document.querySelector("#minutes .num");
let seconds = document.querySelector("#seconds .num");
let period = document.querySelector("#period");

setInterval(() => {
  let dateNow = new Date();
  hours.textContent =
    dateNow.getHours() - 12 < 10
      ? "0" + (dateNow.getHours() - 12)
      : dateNow.getHours() - 12;
  minutes.textContent =
    (dateNow.getMinutes() < 10 ? "0" : "") + dateNow.getMinutes();
  seconds.textContent =
    (dateNow.getSeconds() < 10 ? "0" : "") + dateNow.getSeconds();
  period.textContent = dateNow.getHours() < 12 ? "AM" : "PM";
}, 1000);

// dateNow.getHours() < 10
//         ? "0" + dateNow.getHours()
//         : dateNow.getHours()
