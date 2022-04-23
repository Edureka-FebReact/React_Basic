import { React, Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { name: "" };
  }
  addName = (event) =>{
      this.setState({name: event.target.value});
      console.log(this.state.name);
  }

  render() {
    return (
      <form>
        <h1>Register form</h1>
        <input type="text" onChange={this.addName}/> Name
        <br />
        {/* <input type="text" /> Designation */}
      </form>
    );
  }
}
export default Form;
