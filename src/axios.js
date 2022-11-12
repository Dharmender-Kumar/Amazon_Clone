import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: "http://127.0.0.1:5001/clone-8ed5d/us-central1/api",
    //add url here
});

export default instance;