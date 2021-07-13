import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import { AnimalCard } from "./AnimalCard";
import "./Animal.css";
import { useHistory } from "react-router-dom";

export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);
  const history = useHistory();

  useEffect(() => {
    console.log("AnimalList: Initial render before data");
    getLocations().then(getCustomers).then(getAnimals);
  }, []);

  return (
    <>
      <h2>Animals</h2>
      <button
        onClick={() => {
          history.push("/animals/create");
        }}
      >
        Add Animal
      </button>
      <div className="animals">
        {animals.map((animal) => {
          const owner = customers.find((c) => c.id === animal.customerId);
          const location = locations.find((l) => l.id === animal.locationId);

          return (
            <AnimalCard
              key={animal.id}
              location={location}
              customer={owner}
              animal={animal}
            />
          );
        })}
      </div>
    </>
  );
};
