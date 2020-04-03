import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

class ImageService {
  constructor() {
    this.getImage();
  }
  getImage() {
    imgApi.get().then(res => {
      store.commit("images", res.data);
    });
  }
}

const imageService = new ImageService();
export default imageService;
