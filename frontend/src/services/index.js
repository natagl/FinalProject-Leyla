import axios from "axios";
let baseURL;

console.log("client ");

process.env.NODE_ENV === "production"
  ? //? (baseURL = 'here should be your production endpoint')
    (baseURL = "https://app-final-glinska.herokuapp.com")
  : (baseURL = "http://localhost:5000");

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get("/is-logged-in");
  },
  signUp: async user => {
    return await service.post("/signup", user);
  },
  logIn: async user => {
    return await service.post("/login", user);
  },
  logOut: async () => {
    return await service.get("/logout");
  },
  //creating new axios request to a backend
  createItem: async item => {
    return await service.post("/createItem", item);
  },
  showItem: async () => {
    return await service.get("/showItem");
  },
  handleUpload: theFile => {
    //The one that saves to cloudinary
    return service
      .post("/upload", theFile)
      .then(res => res.data)
      .catch(err => console.error(err));
  },
  saveNewThing: image => {
    //The one that saves to my DB
    return service
      .post("/image/create", image)
      .then(res => res.data)
      .catch(err => console.error(err));
  },

  getAllImages: async () => {
    return await service.get("/all-image");
  }
};

export default actions;
