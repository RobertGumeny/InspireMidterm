import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  constructor() {
    console.log("Image Service works");
    this.getImage();
  }
  getImage() {
    imgApi.get().then(res => {
      console.log(res.data);
      store.commit("images", res.data);
      // let newImg = new Image(res.data);
      // store.commit("images", newImg);
    });
  }
}

const imageService = new ImageService();
export default imageService;
