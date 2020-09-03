import React from "react";

const Employees = ({ employees }) => {
  return (
    <div>
      <center>
        <h1>Employee List</h1>
      </center>

      {employees.map((employee) => (
        <ul key={employee.id.value}>
          <div className="card">
            <div className="card-body">
              <img
                className="card-title"
                src={employee.picture.medium}
                alt="employee"
              />
              <h5 className="card-title">
                {employee.name.first} {employee.name.last}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {employee.location.city}, {employee.location.state}
              </h6>
              <p className="card-subtitle mb-2">{employee.email}</p>
              <p className="card-subtitle mb-2">{employee.phone}</p>
              <p className="card-subtitle mb-2">{employee.cell}</p>
            </div>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Employees;
