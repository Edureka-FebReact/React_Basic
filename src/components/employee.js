import React from "react";

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      EmployeeName: "Nishant",
      Designation: "Developer",
      Employee1Name: "Suresh",
      Designation1: "Developer",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { Designation: props.newDes };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ EmployeeName: "Ramesh" });
    }, 5000);
  }
  promote() {
    this.setState({
      Designation: "Senior Dev",
    });
  }
  render() {
    return (
      <div>
        <h1>Our Employee 1 Name is {this.state.EmployeeName}</h1>
        <h1>Our employee 2 name is {this.state.Employee1Name}</h1>
        <h2>He is our {this.state.Designation}</h2>
        <p></p>
        <button onClick={() => this.promote()}>Promote Employee</button>
      </div>
    );
  }
}
export default Employee;
