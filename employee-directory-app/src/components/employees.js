import React from "react";
import { useTable } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";

function Employees({ data }) {
  const columns = [
    {
      Header: "Name",
      columns: [
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
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "Cell",
          accessor: "cell",
        },
      ],
    },
  ];

  console.log(data);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div>
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
