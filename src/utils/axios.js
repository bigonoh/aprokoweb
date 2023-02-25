import axios from "axios";
import env from "../env";

const API = env.base_url;

/** base url to make request to the BE end point */

const instance = axios.create({
  baseURL: API,
});

// console.log(env.base_url, process.env.NODE_ENV);

export default instance;
