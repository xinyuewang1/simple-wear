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
  const [weather, setWeather] = useState();

  useEffect(() => {
    // Dummy data for develop
    //     setTemp(8);

    if (latitude === undefined || longitude === undefined) return;

    const getTemp = async () => {
      try {
        // let host;
        // if (process.env.NODE_ENV !== "production") {
        //   host = "http://localhost:3001";
        // } else host = "https://simple-wear-backend.herokuapp.com";
        const host = "https://simple-wear-backend.herokuapp.com";

        const weatherData = await axios.get(
          `${host}/myforecast?latitude=${latitude}&longitude=${longitude}`
        );

        // console.log(weatherData);
        // debugger;

        const temperature = weatherData.data.currently.apparentTemperature;
        setTemp(temperature);
        const hourly = weatherData.data.hourly.data;
        // TODO - This is hard coded only for current temperature.

        // TODO - Hardcode for only 7-9, 17-19 as commute hours
        for (let i = 0; i < 24; i++) {
          const h = new Date(hourly[i].time * 1000);
          // debugger;
          if (h.getHours() === 7) {
            setWeather([
              hourly[i].icon, // 7
              hourly[i + 1].icon, // 8
              hourly[i + 2].icon,
              hourly[i + 10].icon, // 17
              hourly[i + 11].icon,
              hourly[i + 12].icon
            ]);
            break;
          }
        }
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
  } else if (error) {
    return <p>{error}</p>;
  } else {
    return (
      <Aux>
        {latitude === undefined || longitude === undefined ? (
          <div>
            <p>
              <strong>Finding Geolocation...</strong>
            </p>
          </div>
        ) : (
          <div></div>
        )}

        {clo !== undefined && temp !== undefined ? (
          <div>
            <span>Commute weather: </span>
            {weather.indexOf("rain") < 0 ? <span>no </span> : <span></span>}
            <span>rain</span>
            <p>Current (feel-like) temp: {temp} °C</p>
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
            if (clo < 1.7) setClo(clo + 0.1);
          }}
          disableLess={clo <= 0}
          disableMore={clo >= 1.7}
        />
      </Aux>
    );
  }
};

export default WithErrorHandler(LayerBuilder, axios);
