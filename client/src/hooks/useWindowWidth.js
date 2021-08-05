import { useState, useEffect } from "react";
import { throttle } from "lodash";
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = throttle(() => {
      setWidth(window.innerWidth);
    }, 500);

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
};

export default useWindowWidth;
