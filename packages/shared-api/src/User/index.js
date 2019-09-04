import axios from "axios";
import configs from "configs/site";

export default {
  login: ({ email, password }) =>
    axios.post(configs.base_url.concat("/users/login"), {
      email,
      password
    })
};
