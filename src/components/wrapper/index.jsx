import React, { forwardRef } from "react";
import './index.css'
export default forwardRef((props, _ref) => {
  const {
    left,
    top,
    right,
    bottom,
    children,
    width,
    opacity,
    pointer = false,
    xCenter = false,
    yCenter = false,
  } = props;
  const style = {
    position: "absolute",
    right,
    bottom,
    width,
    opacity,
    top: `${yCenter ? "50%" : top}`,
    left: `${xCenter ? "50%" : left}`,
    cursor: `${pointer ? "pointer" : "auto"}`,
    transform: `translate(${xCenter ? "-50%" : "0"}, ${
      yCenter ? "-50%" : "0"
    })`,
  };
  return (
    <div ref={_ref} style={style} className="item">
      {children}
    </div>
  );
});

