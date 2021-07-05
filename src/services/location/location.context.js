import React, { useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.services";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Fransico");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };
  useEffect(() => {
    if (!keyword.length) {
      //don't do anything
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      // eslint-disable-next-line prettier/prettier
      value={{ isLoading, error, location, search: onSearch, keyword }}>
      {children}
    </LocationContext.Provider>
  );
};
