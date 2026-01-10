import React from "react";

function Student(props){
    return(
        <>
        <h1>Mera naam {props.details.naam}, Meri umar {props.details.age}, Mera sex {props.details.sex}</h1></>
    )
}

export default Student;