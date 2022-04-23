import React from "react";

class Phone extends React.Component {
    constructor(){
        super();
        this.state={phone : "Iphone7"}
    }
    shouldComponentUpdate() {
        return true // this defines that a change in the value of a state should or should not re-render the page
    }
    upgrade = () => {
        this.setState({phone: "Iphone 10"});
        console.log(this.phone);
    }
    render() {
        return (
            <div>
                <h1>My current phone is a {this.state.phone}</h1>
                <button type="button" onClick={this.upgrade}>Upgrade Phone</button>
            </div>
        )
    }
}

export default Phone