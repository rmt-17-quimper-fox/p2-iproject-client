import axios from "axios";
// "http://localhost:3000"
//https://new-source-web-app.herokuapp.com/

export default axios.create({
    baseURL: "https://new-source-web-app.herokuapp.com/",
  });