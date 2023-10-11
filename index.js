document.addEventListener('DOMContentLoaded', () =>{

const input = document.querySelector("#input");
const city = document.querySelector("#city");
const cityName = document.querySelector("#cityName");
const temp = document.querySelector("#temp");  //
const main = document.querySelector("#main");
const discription = document.querySelector("#discription");
const image = document.querySelector("#image");

input.onsubmit = (e) => {
  e.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};

weatherUpdate = (city) => {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=78fbb2284a9b5c083789b0273c025e2b`)
.then((res) => res.json())
.then((data) => {
    console.log(data)
    let status;
    if (status === 404) {
              alert("Place not found");
            } else {
              cityName.innerHTML = data.name;
              temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
              main.innerHTML = data.weather[0].main;
              discription.innerHTML = data.weather[0].description;
              image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            }
})
}
weatherUpdate("Nairobi")
})