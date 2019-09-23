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
    //     `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/207931?apikey=${process.env.REACT_APP_ACCU_KEY}&details=true`
    //     //     `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/207931?apikey=${process.env.REACT_APP_ACCU_KEY}`
    //   );
    //   // process and extract temperature .... const temperature = ....
    //   // console.log(weatherData.data[0].Temperature.Value);
    //   // TODO - This is hard coded only for current temperature.
    //   if (weatherData.data[0].RealFeelTemperature.Unit === "F") {
    //     const temperature =
    //       ((weatherData.data[0].RealFeelTemperature.Value - 32) * 5) / 9;
    //     return temperature;
    //   } else {
    //     return weatherData.data[0].RealFeelTemperature.Value;
    //   }
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

  // console.log(`[LayerBuilder] clo: ${typeof clo}`);
  // console.log(`clo !== "undefined" ${clo !== undefined}`);
  // debugger;
  // console.log(temp);

  return (
    <Aux>
      {/* TODO - placeholder LOADING, change to sth nicer later. */}
      {clo !== undefined && temp !== undefined ? (
        <div>
          <p>
            <strong>Current temperature: {temp} °C</strong>
          </p>
          <Clothes clo={clo} />
        </div>
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
