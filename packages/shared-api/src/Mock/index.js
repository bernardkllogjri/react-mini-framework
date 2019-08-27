import axios from "axios";
import configs from "configs/site";

const Mock = {
  all: (title = "") =>
    axios.get(configs.base_url.concat("/test"), {
      params: {
        title
      }
    })
};

export { Mock };
