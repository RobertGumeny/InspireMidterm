import store from "../store.js";
import Quote from "../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

class QuoteService {
  constructor() {
    console.log("Quote service is linked");
    this.getQuote();
  }
  getQuote() {
    _quoteApi.get().then(res => {
      console.log(res.data.quote);
      store.commit("quotes", res.data.quote);
    });
  }
}

const quoteService = new QuoteService();
export default quoteService;
