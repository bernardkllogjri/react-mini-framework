//SHARED REDUCERS

import { SOCKET } from "shared-actions/src/types";

const sockets = Object.keys(SOCKET).reduce(
  (acc, s) => ({ ...acc, [s]: [] }),
  {}
);

const socketReducer = (state = { sockets }, action) => {
  const socket = action.type.split(".")[1];

  switch (action.type) {
    case SOCKET.NEWS:
    case SOCKET.CHAT:
      return {
        ...state,
        sockets: {
          ...state.sockets,
          [socket]: [...state.sockets[socket], action.payload]
        }
      };
    default:
      return state;
  }
};

export { socketReducer };
