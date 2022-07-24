import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "",
  //add url here
});

export default instance;
