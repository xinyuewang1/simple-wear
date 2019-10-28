// Reference: https://itnext.io/creating-react-useposition-hook-for-getting-browsers-geolocation-2f27fc1d96de

import { useState, useEffect } from "react";

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  const onError = error => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    var options = {
      enableHighAccuracy: true
      // timeout: 5000,
      // maximumAge: 0
    };

    const watcher = geo.watchPosition(onChange, onError, options);

    return () => geo.clearWatch(watcher);
  }, []);

  return { ...position, error };
};
