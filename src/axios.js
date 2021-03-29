import axios from "axios";

const instance = axios.create({
    baseURL : "..."  //this is used to get the API (cloud function) URL
});

export default instance;