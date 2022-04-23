import React from "react";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { name: "Nishant", Designation: "Trainer" }; 
  }
  greet() {
    alert("Welcome to edureka")
  }
  render() {
    return (
      <div>
        {/* <h1>Hello Mr {this.state.name}</h1> */}
        <h1>Welcome to the react training</h1>
        {/* <h2>you are from {this.props.country}</h2>
        <h2>You are a {this.state.Designation} for this session </h2> */}
        <button onClick={this.greet} type="button">Greet me</button>
      </div>
    );
  }
}

export default Header;
