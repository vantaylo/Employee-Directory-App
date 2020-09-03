import React, { Component } from "react";
import Employees from "./components/employees";

class App extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=200&nat=us")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ employees: data.results });
      })
      .catch(console.log);
  }

  render() {
    return <Employees employees={this.state.employees} />;
  }
}

export default App;
