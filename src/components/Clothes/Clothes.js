import React from "react";

import style from "./Clothes.module.css";

import Emsemble from "./Ensemble/Ensemble";

import Sweater from "../../assets/ClothingSvg/sweater.svg";
const Clothes = props => {
  return (
    <div className={style.Clothes}>
      <Emsemble clo={1} />
      <Sweater />
    </div>
  );
};

export default Clothes;
