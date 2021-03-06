import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

function drawWeather() {
  let weather = store.State.weather;
  // @ts-ignore
  document.getElementById("weather").innerHTML = weather.Template;
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
