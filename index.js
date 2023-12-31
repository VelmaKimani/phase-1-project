document.addEventListener('DOMContentLoaded', () =>{

const input = document.querySelector("#input");
const city = document.querySelector("#city");
const cityName = document.querySelector("#cityName");
const temp = document.querySelector("#temp");  // select the necessary ids whose values will be updated
const main = document.querySelector("#main");
const description = document.querySelector("#description");
const image = document.querySelector("#image");

input.onsubmit = (e) => {
  e.preventDefault();  //Ensure the form does not submit prematurely
  weatherUpdate(city.value);
  city.value = "";
};

weatherUpdate = (city) => {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=78fbb2284a9b5c083789b0273c025e2b`)
.then((res) => res.json()) //fetch data from the API
.then((data) => {
    console.log(data)
    let status;
    if (status === 404) {
              alert("Place not found");
            } else {
              cityName.innerHTML = data.name;
              temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
              main.innerHTML = data.weather[0].main;
              description.innerHTML = data.weather[0].description;
              image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            }
})
}
weatherUpdate("Nairobi")
})