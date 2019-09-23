import React, { useState, useEffect } from "react";
import axios from "axios";

import Aux from "../../hoc/Auxiliary";
import Clothes from "../../components/Clothes/Clothes";
import AdvanceSettings from "../../components/Clothes/AdvanceSettings/AdvanceSettings";

const LayerBuilder = () => {
  const [temp, setTemp] = useState();
  const [clo, setClo] = useState();

  useEffect(() => {
    setTemp(8);
    // const getTemp = async () => {
    //   // Dublin: 207931
    //   // debugger;

    //   // console.log(process.env.REACT_APP_ACCU_KEY);

    //   let weatherData = await axios.get(
    //     // TODO - Remove this, only for developing, not secure!
    //     `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/207931?apikey=${process.env.REACT_APP_ACCU_KEY}`
    //   );
    //   // process and extract temperature .... const temperature = ....
    //   // console.log(weatherData.data[0].Temperature.Value);
    //   // TODO - This is hard coded only for current temperature.
    //   const temperature =
    //     ((weatherData.data[0].Temperature.Value - 32) * 5) / 9;
    //   return temperature;
    // };

    // setTemp(getTemp());
  }, []);

  useEffect(() => {
    // console.log(temp);
    if (temp !== undefined) {
      // TODO - 18.6 is hard code for walking speed 120, change later.
      const newClo = (31 - temp) / 18.6;
      // console.log(`NewClo after temp update: ${newClo}`);
      setClo(newClo);
    }
  }, [temp]);

  // console.log(`[LayerBuilder] clo: ${clo}`);
  // console.log(`clo !== "undefined" ${clo !== undefined}`);
  // debugger;

  return (
    <Aux>
      {/* TODO - placeholder LOADING, change to sth nicer later. */}
      {clo !== undefined && temp !== undefined ? (
        <Clothes clo={clo} />
      ) : (
        <div>LOADING...</div>
      )}
      <AdvanceSettings
        less={() => {
          if (clo > 0) setClo(clo - 0.1);
        }}
        more={() => {
          if (clo < 1.5) setClo(clo + 0.1);
        }}
        disableLess={clo <= 0}
        disableMore={clo >= 1.5}
      />
    </Aux>
  );
};

export default LayerBuilder;
