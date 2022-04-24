import React from "react";

class Products extends React.Component {
    constructor(props){
        super(props);
        this.state={products : JSON}
    }
    componentDidMount() {
        fetch("http://localhost:4000/products", {method:'GET'})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        // console.log(this.state.products);

    }
    
    render() {
        return (
            <div>
                <h1>this is the prrodcts page</h1>
            </div>
        )
    }

}
export default Products
