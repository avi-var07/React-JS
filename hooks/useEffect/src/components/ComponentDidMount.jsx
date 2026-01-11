import React from "react";

import {useEffect, useState} from "react";

function ComponentDidMount(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Mounted, will run once");
    }, []);
    useEffect(()=>{
        console.log("Updation");
    }, [count]);
    useEffect(()=>{
        console.log("Mounted");
        return()=>{
            console.log("Unmounted");
        };
    }, []);
    return(
        <>
        <h1>Mounting</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
        </>
    ) 
};
export default ComponentDidMount;