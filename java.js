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

function cityTimeReplace(event) {
  let cityTimeTarget = event.target.value;
  let cityTime = moment().tz(cityTimeTarget);
  let cityName = cityTimeTarget.replace('_', ' ').split('/')[1];
  let selectCities = document.querySelector('#cities');
  selectCities.innerHTML = `
           <div class="city">
           <div>
            <h2>${cityName}</h2>
         
         
          <div class="date">${cityTime.format('MMM Do YYYY')}</div>
           </div>
          <div class="time">${cityTime.format('h:mm:ss A')}</div>
   
      </div>`;
}

let citySelectElement = document.querySelector('#city');
citySelectElement.addEventListener('change', cityTimeReplace);

setTime();
setInterval(setTime, 1000);
