import axios from "axios";

const Instance = axios.create({
  baseURL: "https://simple-wear.firebaseio.com"
});

export default Instance;
