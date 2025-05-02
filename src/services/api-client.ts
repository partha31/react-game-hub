import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "db89724c33de4929947dfbd64c8aedce",
  },
});
