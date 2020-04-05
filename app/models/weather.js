export default class Weather {
  constructor(data) {
    console.log("[RAW WEATHER API DATA]", data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    this.city = data.name;
    this.kelvin = Math.round(data.main.temp);
    this.fahrenheit = Math.round(this.kelvin * (9 / 5) - 459.67);
    this.celsius = Math.floor(this.kelvin - 273.15);
    this.weather = data.weather[0].main;
    this.icon = data.weather[0].icon;
  }

  get Template() {
    return /*html*/ `
    <p class="mb-0">${this.city}</p>
    <img src="http://openweathermap.org/img/wn/${this.icon}.png">
    <p class="mt-0">${this.weather}</p>
    <div id="weatherControls" class="carousel slide" date-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item text-center mt-2 active">
        <p class="d-block">${this.fahrenheit}<span>&deg;</span>F</p>
      </div>
      <div class="carousel-item text-center mt-2">
        <p class="d-block">${this.celsius}<span>&deg;</span>C</p>
      </div>
      <div class="carousel-item text-center mt-2">
        <p class="d-block">${this.kelvin}<span>&deg;</span>K</p>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#weatherControls"
      role="button"
      data-slide="prev"
    >
      <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#weatherControls"
      role="button"
      data-slide="next"
    >
      <span
        class="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    `;
  }
}
