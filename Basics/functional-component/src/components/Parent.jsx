import React from "react";
import Child from "./Child"
function Parent(props){
    return(
        <>
        <Child name={props.name} age={props.age} />
        </>
    )
}
export default Parent;