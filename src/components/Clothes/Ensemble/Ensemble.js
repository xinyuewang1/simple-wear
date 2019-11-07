import React from "react";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";

import style from "./Ensemble.module.css";

const reqSvgs = require.context(
  "../../../assets/ClothingSvg_icon",
  false,
  /\.svg$/
);
// console.log(reqSvgs);

// props: clo
const Ensemble = props => {
  let ensemble = null;
  const clo = props.clo;
  // console.log(`in Ensemble ${clo}`);

  if (0 < clo && clo <= 0.3) {
    // 0.23 101
    ensemble = [
      // "panties",
      "tubeTop",
      "shortShorts",
      "sandals"
    ];
    // eslint-disable-next-line
  } else if (0.3 < clo && clo <= 0.4) {
    // 0.36 102
    ensemble = [
      // "panties",
      "shortSleeveShirt",
      "shorts",
      "socks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (0.4 < clo && clo <= 0.5) {
    // 0.49 107
    ensemble = [
      // "panties",
      "shortSleeveShirt",
      "thinTrousers",
      "socks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (0.5 < clo && clo <= 0.6) {
    // 0.6 108
    ensemble = [
      // "panties",
      "shirt",
      "thinTrousers",
      "socks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (0.6 < clo && clo <= 0.7) {
    // 203
    ensemble = [
      // "panties",
      "thickShirt",
      "trousers",
      "socks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (0.7 < clo && clo <= 0.8) {
    // 121 0.77
    ensemble = [
      // "panties",
      "sweater",
      "thickTrousers",
      "socks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (0.8 < clo && clo <= 0.9) {
    // 112
    ensemble = [
      // "panties",
      "tShirt",
      "thickShirt",
      "thickTrousers",
      "socks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (0.9 < clo && clo <= 1) {
    // 114
    ensemble = [
      // "panties",
      "tShirt",
      "shirt",
      "thickTrousers",
      "sweater",
      "socks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (1 < clo && clo <= 1.1) {
    // 118
    ensemble = [
      // "panties",
      "tShirt",
      "shirt",
      "thickTrousers",
      "jacket",
      "socks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (1.1 < clo && clo <= 1.2) {
    // 117 1.16
    ensemble = [
      // "panties",
      "tShirt",
      "shirt",
      "thickTrousers",
      "vest",
      "jacket",
      "socks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (1.2 < clo && clo <= 1.3) {
    // 129 1.3
    ensemble = [
      // "panties",
      "thermalUnderpants",
      "tShirt",
      "shirt",
      "thickTrousers",
      "sweater",
      "jacket",
      "socks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (1.3 < clo && clo <= 1.4) {
    // 450 1.37
    ensemble = [
      // "panties",
      "thermalUnderpants",
      "undershirt",
      "shirt",
      "thinTrousers",
      "cardigan",
      "jacket",
      "thickSocks",
      "shoes"
    ];
    // eslint-disable-next-line
  } else if (1.4 < clo && clo <= 1.5) {
    // 445 1.49
    ensemble = [
      // "panties",
      "tShirt",
      "thinShirt",
      "thinTrousers",
      "vest",
      "jacket",
      "coat",
      "socks",
      "shoes"
    ];

  } else if (1.5 < clo && clo <= 1.6) {
    // 494 1.60
    ensemble = [
      // "panties",
      "tShirt",
      "thinShirt",
      "thinTrousers",
      "jacket",
      "parkaCoat", //188
      "cap",
      "gloves",
      "socks",
      "shoes"
    ];
  } else if (1.6 < clo && clo <= 1.7) {
    // 491 1.63
    ensemble = [
      // "panties",
      "underShirt",
      "underpants",
      "coveralls",
      "insulatedTrousers",
      "insulatedJacket",
      "socks",
      "shoes"
    ];
  } else {
    ensemble = null;
    // console.log("Fall in else.");
  }

  if (ensemble !== null) {
    // console.log(ensemble);
    ensemble = ensemble.map(garment => "./" + garment + ".svg");

    return (
      <div className="Ensemble">
        {ensemble.map(path => (
          <div className={style.Container} key={path}>
            <ReactSVG src={reqSvgs(path)} key={path} className={style.Svg} />
            <p>{path.slice(2, -4)}</p>
          </div>
        ))}
      </div>
    );
  } else {
    if (clo <= 0) {
      return <p>Maybe it's too hot to wear anything for you.</p>;
    } else if (clo > 1.5) {
      return <p>Maybe it's too cold to go outside.</p>;
    }
  }
};

Ensemble.propTypes = {
  clo: PropTypes.number
};

export default Ensemble;
