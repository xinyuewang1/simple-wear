import React from "react";

import garments from "./Garment.module.css";

const Garment = props => {
  let ensemble = null;
  const clo = props.clo;
  if (clo <= 0.3) {
    ensemble = ["panties", "t-shirt", "shorts", "light socks", "sandals"];
  } else if (0.3 < clo <= 0.45) {
    ensemble = [
      "panties",
      "petticoat",
      "stockings",
      "light dress with sleeves",
      "sandals"
    ];
  } else if (0.45 < clo <= 0.5) {
    ensemble = [
      "underpants",
      "shirt with short sleeves",
      "light trousers",
      "light socks",
      "shoes"
    ];
  } else if (0.5 < clo <= 0.55) {
    ensemble = [
      "panties",
      "stockings",
      "shirt with short sleeves",
      "skirt",
      "sandals"
    ];
  } else if (0.55 < clo <= 0.6) {
    ensemble = [
      "underpants",
      "shirt",
      "light-weight trousers",
      "socks",
      "shoes"
    ];
  } else if (0.6 < clo <= 0.7) {
    if (props.gender === "female") {
      ensemble = ["panties", "petticoat", "stockings", "dress", "shoes"];
    } else {
      ensemble = ["underwear", "shirt", "trousers", "socks", "shoes"];
    }
  } else if (0.7 < clo <= 0.75) {
    ensemble = ["underwear", "sweater", "trousers", "long socks", "runners"];
  } else if (0.75 < clo <= 0.8) {
    ensemble = [
      "panties",
      "petticoat",
      "shirt",
      "skirt",
      "thick knee socks",
      "shoes"
    ];
  } else if (0.8 < clo <= 0.9) {
    ensemble = [
      "panties",
      "shirt",
      "skirt",
      "roundneck sweater",
      "thick knee socks",
      "shoes"
    ];
  } else if (0.9 < clo <= 0.95) {
    ensemble = [
      "underpants",
      "singlet with short sleeves",
      "shirt",
      "trousers",
      "v-neck sweater",
      "socks",
      "shoes"
    ];
  } else if (0.95 < clo <= 1) {
    if (props.gender === "female") {
      ensemble = ["panties", "stockings", "shirt", "skirt", "vest", "jacket"];
    } else {
      ensemble = ["panties", "shirt", "trousers", "jacket", "socks", "shoes"];
    }
  } else if (1 < clo <= 1.1) {
    if (props.gender === "female") {
      ensemble = [
        "panties",
        "stockings",
        "blouse",
        "long skirt",
        "jacket",
        "shoes"
      ];
    } else {
      ensemble = [
        "underwear",
        "singlet with short sleeves",
        "shirt",
        "trousers",
        "jacket",
        "socks",
        "shoes"
      ];
    }
  }
};

export default Garment;
