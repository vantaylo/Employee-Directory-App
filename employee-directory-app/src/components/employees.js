import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SortTable from "./sortTable";

function Employees({ data }) {
  const columns = [
    {
      Header: "Employee",
      columns: [
        {
          Header: "Picture",
          accessor: (row) => {
            return (
              <div>
                <img height={34} src={row.picture.medium} alt="employee" />
              </div>
            );
          },
        },
        {
          Header: "First Name",
          accessor: "name.first",
        },
        {
          Header: "Last Name",
          accessor: "name.last",
        },
      ],
    },
    {
      Header: "Info",
      columns: [
        {
          Header: "Location",
          accessor: "location.state",
        },
        {
          Header: "Cell",
          accessor: "cell",
        },
        {
          Header: "Email",
          accessor: "email",
        },
      ],
    },
  ];

  return <SortTable columns={columns} data={data} />;
}

export default Employees;
