import { SOCKET } from "./types";

const addSocket = (type, payload) => ({
  type: SOCKET[type],
  payload
});

export { addSocket };
