import React from "react";
function Welcome(props){
    return(
        <>
        <h1>Welcome {props.name} in class {props.topics} belongs to {props.place} and branch is {props.branch}</h1>
        </>

   
    )
}
export default Welcome