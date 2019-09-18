import React from "react";
import PropTypes from "prop-types";

const reqSvgs = require.context("../../assets/ClothingSvg", false, /\.svg$/);
const ALLSVGS = reqSvgs.keys();
// console.log(allSvgFilepaths);

// props: clo
const Ensemble = props => {
  let ensemble = null;
  const clo = props.clo;
  if (clo <= 0.3) {
    // 0.23 101
    ensemble = ["panties", "tubeTop", "shortShorts", "sandals"];
  } else if (0.3 < clo <= 0.4) {
    // 0.36 102
    ensemble = ["panties", "ShortSleeveShirt", "shorts", "socks", "shoes"];
  } else if (0.4 < clo <= 0.5) {
    // 0.49 107
    ensemble = [
      "panties",
      "ShortSleeveShirt",
      "thinTrousers",
      "socks",
      "shoes"
    ];
  } else if (0.5 < clo <= 0.6) {
    // 0.6 108
    ensemble = ["panties", "shirt", "thinTrousers", "socks", "shoes"];
  } else if (0.6 < clo <= 0.7) {
    // 203
    ensemble = ["panties", "thickShirt", "trousers", "socks", "shoes"];
  } else if (0.7 < clo <= 0.8) {
    // 121 0.77
    ensemble = ["panties", "sweater", "ThickTrousers", "socks", "shoes"];
  } else if (0.8 < clo <= 0.9) {
    // 112
    ensemble = [
      "panties",
      "tShirt",
      "thickShirt",
      "ThickTrousers",
      "socks",
      "shoes"
    ];
  } else if (0.9 < clo <= 1) {
    // 114
    ensemble = [
      "panties",
      "tShirt",
      "shirt",
      "ThickTrousers",
      "sweater",
      "socks",
      "shoes"
    ];
  } else if (1 < clo <= 1.1) {
    // 118
    ensemble = [
      "panties",
      "tShirt",
      "shirt",
      "ThickTrousers",
      "woolJacket",
      "socks",
      "shoes"
    ];
  } else if (1.1 < clo <= 1.2) {
    // 117 1.16
    ensemble = [
      "panties",
      "tShirt",
      "shirt",
      "ThickTrousers",
      "vest",
      "woolJacket",
      "socks",
      "shoes"
    ];
  } else if (1.2 < clo <= 1.3) {
    // 129 1.3
    ensemble = [
      "panties",
      "thermalUnderpants",
      "tShirt",
      "shirt",
      "ThickTrousers",
      "sweater",
      "woolJacket",
      "socks",
      "shoes"
    ];
  } else if (1.3 < clo <= 1.4) {
    // 450 1.37
    ensemble = [
      "panties",
      "thermalUnderpants",
      "undershirt",
      "shirt",
      "thinTrousers",
      "cardigan",
      "woolJacket",
      "thickSocks",
      "shoes"
    ];
  } else if (1.4 < clo <= 1.5) {
    // 445 1.49
    ensemble = [
      "panties",
      "tShirt",
      "thinShirt",
      "thinTrousers",
      "vest",
      "coat",
      "woolJacket",
      "socks",
      "shoes"
    ];
  } else {
    ensemble = null;
  }

  const imagePath = ALLSVGS[0];
  // const image = reqSvgs(imagePath);

  return <svg src={imagePath} />;
};

Ensemble.propTypes = {
  clo: PropTypes.number
};

export default Ensemble;
