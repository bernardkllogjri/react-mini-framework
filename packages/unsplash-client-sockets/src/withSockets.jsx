import React, { useEffect } from "react";
import sockets from "./config/sockets";
import io from "socket.io-client";
import configs from "configs/site";
import withStore from "./withStore";

export default C =>
  withStore(({ pushMessage, ...props }) => {
    console.log(props.sockets);
    useEffect(() => {
      const socket = io(configs.socket_url);
      socket.on("connect", function() {});
      sockets.forEach(({ name, cb }) => {
        socket.on(name, data => pushMessage(name.toUpperCase(), data));
      });
      return () => {
        socket.disconnect();
      };
    }, []);

    return <C />;
  });
