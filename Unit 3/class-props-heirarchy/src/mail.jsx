import React from "react";
function Mail(props){
     return(
        <>
        <p>First Email: {props.email1}</p>
        <p>Second Email: {props.email2}</p>
        <p>Third Email: {props.email3}</p>
        </>
     )
}
export default Mail;