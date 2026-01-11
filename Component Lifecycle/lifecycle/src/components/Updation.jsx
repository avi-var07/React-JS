import React from "react";

class Updation extends React.Component{
    constructor(){
        super();
        this.state={count:0};
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Previous Count: ", prevState.count);
        console.log("Current Count: ", this.state.count);
    }

    increment =()=>{
        this.setState({
            count: this.state.count +1
        })
    }
    render(){
        return <button onClick={this.increment}>+</button>
    }
}
export default Updation;