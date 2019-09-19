import React from "react";

import style from "./Clothes.module.css";

import Emsemble from "./Ensemble/Ensemble";

const Clothes = props => {
  return (
    <div className={style.Clothes}>
      <Emsemble clo={1} />
    </div>
  );
};

export default Clothes;
