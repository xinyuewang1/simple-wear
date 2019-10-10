import React, { useState, useEffect } from "react";
import axios from "axios";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Clothes from "../../components/Clothes/Clothes";
import AdvanceSettings from "../../components/Clothes/AdvanceSettings/AdvanceSettings";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

const LayerBuilder = () => {
  const [temp, setTemp] = useState();
  const [clo, setClo] = useState();
  const [er, setEr] = useState(false);

  useEffect(() => {
    // Dummy data for develop
    setTemp(8);

    // Dublin: 207931
    // debugger;

    // const getTemp = async () => {
    //   try {
    //     const weatherData = await axios.get(
    //       // TODO - Remove this, only for developing, not secure!
    //       `https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/207931?apikey=${process.env.REACT_APP_ACCU_KEY}&details=true`
    //       //     `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/207931?apikey=${process.env.REACT_APP_ACCU_KEY}`
    //     );

    //     // TODO - This is hard coded only for current temperature.
    //     if (weatherData.data[0].RealFeelTemperature.Unit === "F") {
    //       const temperature =
    //         ((weatherData.data[0].RealFeelTemperature.Value - 32) * 5) / 9;
    //       setTemp(Math.round(temperature));
    //     } else {
    //       setTemp(Math.round(weatherData.data[0].RealFeelTemperature.Value));
    //     }
    //   } catch (err) {
    //     setEr(true);
    //   }
    // };

    // getTemp();
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

  if (er) {
    return <p>Connection failed. :(</p>;
  } else {
    return (
      <Aux>
        {clo !== undefined && temp !== undefined ? (
          <div>
            <p>
              <strong>Current temperature: {temp} °C</strong>
            </p>
            <Clothes clo={clo} />
          </div>
        ) : (
          <Spinner />
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
  }
};

export default WithErrorHandler(LayerBuilder, axios);
