export default class Weather {
  constructor(data) {
    console.log("[RAW WEATHER API DATA]", data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    this.kelvin = data.main.temp;
    this.fahrenheit = Math.round(this.kelvin * (9 / 5) - 459.67);
    this.celsius = Math.floor(this.kelvin - 273.15);
    this.weather = data.weather[0].main;
    this.icon = data.weather[0].icon;
  }

  get Template() {
    return /*html*/ `
      <p>${this.city}</p>
      <p>Kelvin: ${this.kelvin}</p>
      <p>Fahrenheit: ${this.fahrenheit}</p>
      <p>Celsius: ${this.celsius}</p>
      <p>${this.icon} , ${this.weather}</p>
    `;
  }
}
