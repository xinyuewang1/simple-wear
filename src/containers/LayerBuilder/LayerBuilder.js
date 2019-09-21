import React, { useState, useEffect } from "react";
import axios from "axios";

import Aux from "../../hoc/Auxiliary";
import Clothes from "../../components/Clothes/Clothes";

const LayerBuilder = () => {
  const [temp, setTemp] = useState(0);
  const [clo, setClo] = useState();

  useEffect(() => {
    setTemp(16);
    // const getTemp = async () => {
    //   // let weatherData = await axios.get("url here");
    //   // process and extract temperature .... const temperature = ....

    //   return temperature;
    // };

    // setTemp(getTemp());
  }, []);

  useEffect(() => {
    // 18.6 is hard code for walking speed 120, change later.
    const newClo = (31 - temp) / 18.6;
    setClo(newClo);
  }, [clo]);

  return (
    <Aux>
      {clo ? <Clothes clo={clo} /> : <div>LOADING...</div>}
      <div> Clothes Controls</div>
    </Aux>
  );
};

export default LayerBuilder;
