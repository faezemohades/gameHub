import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ebf3935ff67f4244951489921b819746",
  },
});