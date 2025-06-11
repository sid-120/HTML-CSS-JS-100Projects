const apiKey = "776d9b2a822827ebd56f0255a7afadcc";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    let weatherStatus = data.weather[0].main;

    switch (weatherStatus) {
      case "Clouds":
        weatherIcon.src = "Assets/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "Assets/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "Assets/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "Assets/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "Assets/mist.png";
        break;
      case "Humidity":
        weatherIcon.src = "Assets/humidity.png";
        break;
      case "Snow":
        weatherIcon.src = "Assets/snow.png";
        break;
      case "Wind":
        weatherIcon.src = "Assets/wind.png";
        break;
      default:
        console.log("Sorry! Weather status not found. Try Later!!!");
        break;
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
