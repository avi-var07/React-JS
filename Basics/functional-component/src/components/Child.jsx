import React from "react";
import GrandChild from "./GrandChild"

function Child(props){
    return(
       <>
       <GrandChild name={props.name} age = {props.age} />
       </> 
    )
};
export default Child;