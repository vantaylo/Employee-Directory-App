import React from "react";
import useFetch from "./hooks/fetchAPI";
import Employees from "./components/employees";

function App() {
  const [response, loading, hasError] = useFetch(
    "https://randomuser.me/api/?results=200&nat=us"
  );

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        <div>
          <Employees data={response} />
        </div>
      )}
    </>
  );
}

export default App;
