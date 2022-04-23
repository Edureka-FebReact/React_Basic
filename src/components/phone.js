import React from "react";

class Phone extends React.Component {
    constructor(props){
        super(props);
        this.state={phone : "Iphone7"}
    }
    shouldComponentUpdate() {
        return true // this defines that a change in the value of a state should or should not re-render the page
    }
   componentDidMount() {
       setTimeout(() => {
           this.setState({phone: "Iphone 10"})
       }, 3000)
   }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("heading1").innerHTML= "my old phone was " + prevState.phone;
    }
    componentDidUpdate() {
        document.getElementById("heading2").innerHTML = "the new phone is " + this.state.phone
    }
    render() {
        return (
            <div>
                <h1>My current phone is a {this.state.phone}</h1>
                <h2 id="heading1"></h2>
                <h2 id="heading2"></h2>
                {/* <button type="button" onClick={this.upgrade}>Upgrade Phone</button> */}
            </div>
        )
    }
}

export default Phone