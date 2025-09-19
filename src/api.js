import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change to ngrok URL when testing with OpenMic
});

export default API;
