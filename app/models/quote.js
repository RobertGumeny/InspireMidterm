export default class Quote {
  constructor(data) {
    this.body = data.body;
    this.author = data.author;
  }

  get Template() {
    // REVIEW Why isn't this working?
    return /*html*/ `
      <p>Quote: ${this.body}</p>
      <p>Author: ${this.author}</p>

    `;
  }
}
