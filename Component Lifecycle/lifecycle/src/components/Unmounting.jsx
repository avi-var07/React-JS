import React from "react";

class Unmounting extends React.Component{
    componentWillUnmount(){
        console.log("Unmounting")
    }
    render(){
        return <h1>Done</h1>
    }
}
export default Unmounting;