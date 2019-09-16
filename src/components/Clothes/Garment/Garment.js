import React from "react";

import garments from "./Garment.module.css";

const Garment = props => {
  let garment = null;

  switch (props.type) {
    case "t-shirt":
      garment = <div className={garments.walking.shorts}></div>;
      break;
    default:
      garment = null;
  }
};

export default Garment;
