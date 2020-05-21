export default class Quote {
  constructor(data) {
    this.body = data.body;
    this.author = data.author;
  }

  get Template() {
    return /*html*/ `
      <p>Quote: ${this.body}</p>
      <p>Author: ${this.author}</p>

    `;
  }
}
