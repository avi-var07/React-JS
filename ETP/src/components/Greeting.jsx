import React, {useState} from "react";

function Greeting(){
    const[message, setMessage] = useState("");
    const[toggle, setToggle] = useState(true);

    const handleClick = ()=>{
        if(toggle){
            setMessage("Good Morning!");
            setToggle(false);
        }
        else{
            setMessage("Good Evening!");
            setToggle(true);
        }
    }

    return(
        <>
        
        <h1>{message}</h1>
        <button onClick = {handleClick}>Toggle</button>
        </>
    )
}
export default Greeting;