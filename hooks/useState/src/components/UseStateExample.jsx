import React from "react";
import {useState} from "react";
function UseStateExample(){
    const [count, setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0);
    const handleClick=()=>{
        setPrevCount(count);
        setCount(count+1);
    }   
    return (
    <>
    <h1>PreviousCount: {prevCount}</h1>
    <h1>New Count: {count}</h1>
    <button onClick={handleClick}>Click Me!</button>
    </>
    )
}
export default UseStateExample; 