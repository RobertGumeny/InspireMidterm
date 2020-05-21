import store from "../store.js";
import Greeting from "../models/greeting.js";

class GreetingService {
  constructor() {
    this.getGreeting();
  }
  getGreeting() {
    let greeting = new Greeting();
    store.commit("greetings", greeting);
  }
}

const greetingService = new GreetingService();
export default greetingService;
