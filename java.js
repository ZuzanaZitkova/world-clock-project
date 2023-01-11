function setTime() {
  let americaDate = document.querySelector('#date-america');
  let americaTime = document.querySelector('#time-america');

  let americaElement = moment().tz('America/Mexico_City');

  americaDate.innerHTML = americaElement.format('MMMM Do YYYY');
  americaTime.innerHTML = americaElement.format('h:mm:ss A');

  let czechDate = document.querySelector('#czech-date');
  let czechTime = document.querySelector('#czech-time');

  let czechElement = moment().tz('Europe / Prague');

  czechDate.innerHTML = czechElement.format('MMM Do YYYY');
  czechTime.innerHTML = czechElement.format('h:mm:ss A');
}

setTime();
setInterval(setTime, 1000);
