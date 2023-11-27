import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cd55304a07aa48d894714db10ab5f0bb",
  },
});
