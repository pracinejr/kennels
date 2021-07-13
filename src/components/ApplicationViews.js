import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <LocationProvider>
        <Route path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>
      <AnimalProvider>
        <CustomerProvider>
          <LocationProvider>
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
          </LocationProvider>
        </CustomerProvider>
      </AnimalProvider>
      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>
      <EmployeeProvider>
        <LocationProvider>
          <Route path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/employees/newEmployee">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider>
    </>
  );
};
