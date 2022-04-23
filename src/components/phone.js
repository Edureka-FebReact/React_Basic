import React from "react";

class Phone extends React.Component {
    constructor(){
        super();
        this.state={phone : "Iphone7"}
    }

    upgrade = () => {
        this.setState({phone: "Iphone 10"});
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