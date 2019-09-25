import React, { useEffect } from "react";
import lottie from "lottie-web";

export const Animation = ({ path }) => {
  useEffect(() => {
    let animation;
    const element = document.getElementById("animation");
    if (element) {
      animation = lottie.loadAnimation({
        container: element,
        renderer: "svg",
        loop: true,
        path: path
      });
      animation.play();
    }
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <div>
      <div id="animation"></div>
    </div>
  );
};
