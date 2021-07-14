import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import { useHistory } from "react-router-dom";
import "./Location.css";

export const newLocation = () => {
  const { addLocation } = useContext(LocationContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [location, setLocation] = useState({
    name: "",
    address: "",
  });

  const history = useHistory();

  useEffect(() => {
    getLocations();
  }, []);

  const handleControlledInputChange = (event) => {
    const newLocation = { ...location };
    newLocation[event.target.id] = event.target.value;
    setLocation(newLocation);
  };

  const handleClickSaveLocation = (event) => {
    event.preventDefault();

    const locationId = parseInt(location.locationId);
  };
};
