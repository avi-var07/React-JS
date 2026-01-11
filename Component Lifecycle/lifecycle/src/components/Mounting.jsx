import React from "react";

class Mounting extends React.Component{
    constructor(){
        console.log("Constructor called");
        super();

        this.state = {
            count: 0
        };

    }
    componentDidMount(){
        console.log("componentDidMount is called");
    }
    render(){
        console.log("Render called");
        return(
            <>
            <h1>Mounting</h1>
            </>
        )
    }
}
export default Mounting;