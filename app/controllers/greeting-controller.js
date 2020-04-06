import GreetingService from "../services/greeting-service.js";
import Greeting from "../models/greeting.js";
import store from "../store.js";

function _drawGreeting() {
  document.getElementById("greeting").innerHTML = `<h3>Hello there!</h3>`;
}

function updateTime(i) {
  if (i < 10) {
    return "0" + i;
  } else {
    return i;
  }
}

function currentTime() {
  let date = new Date();
  var hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
  let t = setTimeout(function() {
    currentTime();
  }, 1000);
}

export default class GreetingController {
  constructor() {
    _drawGreeting();
    currentTime();
    console.log("Greeting Controller is linked!");
    store.subscribe("greetings", _drawGreeting);
  }
}
