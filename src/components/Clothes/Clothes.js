import React from "react";

import style from "./Clothes.module.css";

import Emsemble from "./Ensemble/Ensemble";

const Clothes = ({ clo }) => {
  return (
    <div className={style.Clothes}>
      <Emsemble clo={clo} />
    </div>
  );
};

export default Clothes;
