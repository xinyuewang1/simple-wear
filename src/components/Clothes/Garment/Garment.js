import React from "react";

// props: clo, gender
const Garment = props => {
  let ensemble = null;
  const clo = props.clo;
  if (clo <= 0.3) {
    // 0.23 101
    ensemble = ["panties", "tubeTop", "shortShorts", "sandals"];
  } else if (0.3 < clo <= 0.4) {
    // 0.36 102
    ensemble = [
      "panties",
      "ShortSleeveShirt",
      "walkingShorts", //0.08
      "socks",
      "streetShoes"
    ];
  } else if (0.4 < clo <= 0.5) {
    // 0.49 107
    ensemble = [
      // panties 0.03, brief 0.04
      "panties",
      "ShortSleeveShirt", // polo
      "fittedTrousers",
      "socks",
      "streetShoes"
    ];
  } else if (0.5 < clo <= 0.6) {
    // 0.6 108
    ensemble = [
      "panties",
      "shirt", // 0.33
      "fittedTrousers",
      "socks",
      "streetShoes"
    ];
  } else if (0.6 < clo <= 0.7) {
    // 203
    ensemble = [
      "panties",
      "shirt", // 0.33
      "looseTrousers",
      "socks",
      "shoes"
    ];
  } else if (0.7 < clo <= 0.8) {
    // 121 0.77
    ensemble = ["panties", "sweater", "looseTrousers", "socks", "runners"];
  } else if (0.8 < clo <= 0.9) {
    // 112
    ensemble = [
      "panties",
      "tShirt",
      "shirt",
      "looseTrousers",
      "socks",
      "streetShoes"
    ];
  } else if (0.9 < clo <= 1) {
    ensemble = [
      "panties",
      "tShirt",
      "shirt",
      "looseTrousers",
      "sweater",
      "socks",
      "streetShoes"
    ];
  } else if (1 < clo <= 1.1) {
    // 118
    ensemble = [
      "panties",
      "tShirt",
      "shirt",
      "thickLooseTrousers",
      "suiteJacket",
      "socks",
      "streetShoes"
    ];
  } else if (1.1 < clo <= 1.2) {
    // 117 1.16
    ensemble = [
      "panties",
      "tShirt",
      "shirt",
      "thickLooseTrousers",
      "vest",
      "suitJacket",
      "socks",
      "streetShoes"
    ];
  } else if (1.2 < clo <= 1.3) {
    // 129 1.3
    ensemble = [
      "underwear with long sleeves",
      "underwear with long legs",
      "shirt",
      "trousers",
      "v-neck sweater",
      "jacket",
      "socks",
      "shoes"
    ];
  } else if (1.3 < clo <= 1.5) {
    ensemble = [
      "underwear with short sleeves",
      "underwear with long legs",
      "shirt",
      "trousers",
      "vest",
      "jacket",
      "coat",
      "socks",
      "shoes"
    ];
  } else {
    ensemble = null;
  }
};

export default Garment;
