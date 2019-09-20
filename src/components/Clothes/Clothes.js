import React from "react";
// import ReactSVG from "react-svg";

import style from "./Clothes.module.css";

import Emsemble from "./Ensemble/Ensemble";

const Clothes = props => {
  return (
    <div className={style.Clothes}>
      <Emsemble clo={0.97} />
      {/* <ReactSVG src='tShirt.svg' /> */}
    </div>
  );
};

export default Clothes;
