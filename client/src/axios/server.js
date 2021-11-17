import axios from "axios";
// "http://localhost:3000"
//https://denis-news-cms.herokuapp.com

export default axios.create({
    baseURL: "http://localhost:3000",
  });