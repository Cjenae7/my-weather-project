let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

let currentDay = days[now.getDay()];
let currentHours = now.getHours();
if (currentHours < 10) {
  currentHours = `0${currentHours}`;
}
let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}

// My time heading is in a span //
let span = document.querySelector("span.current-time");
span.innerHTML = currentDay + ", " + currentHours + ":" + currentMinutes;

function submitCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  let h1 = document.querySelector("#inputcity");
  h1.innerHTML = input.value;

  searchCity(input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", submitCity);

//// Search Engine
function searchCity(city) {
  let apiKey = "c50b5a754f93d07aef8211ca2b9025a4";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiURL}&appid=${apiKey}`).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currenttemp = document.querySelector("#currently");
  currenttemp.innerHTML = `${temperature}°`;
}
