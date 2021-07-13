import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./EmployeeCard";
import { LocationContext } from "../location/LocationProvider";
import { useHistory } from "react-router-dom";
import "./Employee.css";

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees().then(getLocations);
  }, []);

  return (
    <>
      <h2>Employees</h2>
      <button
        onClick={() => {
          history.push("/employees/newEmployee");
        }}
      >
        Add New Employee
      </button>
      <div className="employees">
        {console.log("EmployeeList: Render", employees)}
        {employees.map((employee) => {
          const location = locations.find((l) => l.id === employee.locationId);

          return (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              location={location}
            />
          );
        })}
      </div>
    </>
  );
};
