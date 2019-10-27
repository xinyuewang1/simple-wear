import React, { useState, useEffect } from "react";
import axios from "axios";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Clothes from "../../components/Clothes/Clothes";
import AdvanceSettings from "../../components/Clothes/AdvanceSettings/AdvanceSettings";
import Spinner from "../../components/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import { usePosition } from "../../components/Geo/UsePosition";

const LayerBuilder = () => {
  const [temp, setTemp] = useState();
  const [clo, setClo] = useState();
  const [er, setEr] = useState(false);
  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    // Dummy data for develop
    //     setTemp(8);

    if (latitude === undefined || longitude === undefined) return;

    const getTemp = async () => {
      try {
        // const weatherData = await axios.get(
        //   // TODO - Remove this, only for developing, not secure!
        //   // `https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/207931?apikey=${process.env.REACT_APP_ACCU_KEY}&details=true`
        //   //     `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/207931?apikey=${process.env.REACT_APP_ACCU_KEY}`
        //   `https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY_KEY}/${latitude},${longitude}?units=si`
        // );

        let host;
        if (process.env.NODE_ENV !== "production") {
          host = "http://localhost:3001";
        } else host = "https://simple-wear-backend.herokuapp.com";
        // const host = "https://simple-wear-backend.herokuapp.com";

        const weatherData = await axios.get(
          `${host}/myforecast?latitude=${latitude}&longitude=${longitude}`
        );
        // console.log("Get weather data");
        // debugger;
        const temperature = weatherData.currently.apparentTemperature;
        setTemp(temperature);
        // TODO - This is hard coded only for current temperature.
      } catch (err) {
        console.log(err);
        setEr(true);
      }
    };

    getTemp();
  }, [latitude, longitude]);

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
        <code>
          latitude: {latitude}
          <br />
          longitude: {longitude}
          <br />
          error: {error}
        </code>
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
