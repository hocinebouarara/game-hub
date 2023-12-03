import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c150af6a1e324dca911f3ebc47f144fb",
  },
});
