import { React, Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: null,
      desc: "Google LLC is an American multinational technology company that focuses on artificial intelligence, search engine, online advertising, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics.",
      gender: "Select",
    };
  }
  onChangeVal = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a numeric value");
      }
    }
    this.setState({ [nam]: val });
    console.log(this.state.name);
    console.log(this.state.age);
    // this.setState({ name: event.target.value });
    // console.log(this.state.name);
  };

  render() {
    return (
      <form>
        <h1 >Register form</h1>
        <input type="text" name="name" onChange={this.onChangeVal} /> Name
        <input type="text" name="age" onChange={this.onChangeVal} /> age
        <br />
        <h2>your age is {this.state.age}</h2>
        <br />
        <textarea value={this.state.desc}></textarea>
        <br />
        <select value={this.state.gender}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {/* <input type="text" /> Designation */}
      </form>
    );
  }
}
export default Form;
