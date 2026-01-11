import React from "react";

class Home extends React.Component{
    title = "Meow";
    showMessage = () =>{
        return <h1>Haule Haule se dua lgti hai</h1>
    }
    render(){
        return(
            <>
                <h2>Hello World</h2>
                <h1>{this.showMessage()}</h1>
                <h3>{this.title}</h3>
                <h1>{this.props.name} {this.props.age}</h1>
            </>
        );
    }
}
export default Home;