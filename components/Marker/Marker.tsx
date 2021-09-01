import React from "react";
import "./Marker.module.scss";

const Marker = (props: any) => {
  const { color, name, id, text } = props;
  return (
    <div
      className="marker"
      style={{ backgroundColor: color, cursor: "pointer" }}
      title={text}
    >
      {text}
    </div>
  );
};

export default Marker;
