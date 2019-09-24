import React, { useState, useEffect } from "react";
import axios from "axios";

import Aux from "../../hoc/Auxiliary";
import Clothes from "../../components/Clothes/Clothes";

const LayerBuilder = () => {
  const [temp, setTemp] = useState(0);
  const [clo, setClo] = useState();

  useEffect(() => {
    setTemp(14);
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
    // TODO - 18.6 is hard code for walking speed 120, change later.
    const newClo = (31 - temp) / 18.6;
    setClo(newClo);
  }, [temp]);

  console.log(clo);
  // debugger;

  return (
    <Aux>
      {/* TODO - placeholder LOADING, change to sth else later. */}
      {clo !== "undefined" ? <Clothes clo={clo} /> : <div>LOADING...</div>}
      <div> Clothes Controls</div>
    </Aux>
  );
};

export default LayerBuilder;
