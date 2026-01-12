import React from "react";
import {useContext} from "react"
import UserContext from "./UserContext";

function Ghar(){
    const {name, age} = useContext(UserContext);
    return <h1>Name: {name} Age: {age}</h1>
};
export default Ghar;