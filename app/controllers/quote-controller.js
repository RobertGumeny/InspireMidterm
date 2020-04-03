import QuoteService from "../services/quote-service.js";
import Quote from "../models/quote.js";
import store from "../store.js";

function _drawQuote() {
  let quote = store.State.quotes;
  document.getElementById("quote").innerHTML = `<p>${quote.body}</p>`;
  document.getElementById("quote-author").innerHTML = `<p>${quote.author}</p>`;
}
export default class QuoteController {
  constructor() {
    store.subscribe("quotes", _drawQuote);
  }
}
