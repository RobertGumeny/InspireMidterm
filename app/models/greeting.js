export default class Greeting {
  constructor(data) {
    // this.user = data.user || "No one";
  }

  get Template() {
    return /*html*/ `
    <h4>Good Morning, </h4>
    `;
  }
}
