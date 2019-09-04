import axios from "axios";
import configs from "configs/site";

export default {
  all: (title = "") =>
    axios.get(configs.base_url.concat("/test"), {
      params: {
        title
      }
    })
};


