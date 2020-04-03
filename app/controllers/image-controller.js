import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  console.log(store.State.images.url);
  document.body.style.backgroundImage = `url('${store.State.images.url}')`;
}
export default class ImageController {
  constructor() {
    store.subscribe("images", _drawImage);
  }
}
