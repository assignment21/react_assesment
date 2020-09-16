import axios from "axios";

export default axios.create({
  baseURL: "https://mean.stagingsdei.com:6047/user",
  headers: {
    "Content-type": "application/json"
  }
});