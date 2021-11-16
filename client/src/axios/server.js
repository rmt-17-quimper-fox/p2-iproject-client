import axios from "axios";
// "http://localhost:3000"

const instance = axios.create({
    baseURL: "http://localhost:3000",
  });

module.exports = instance