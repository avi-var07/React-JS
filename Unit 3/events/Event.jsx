import React from "react";

function Event(){
    return(
        <>
        <button onClick={()=>alert('Button Dab Gaya')}>Click Kar Ek baar!</button>
        <button onDoubleClick={()=>alert('Button Dab Gaya')}>Click Kar Do baar!</button>

        <br />

        <input onKeyUp={(a)=>console.log(`Key Pressed ${a.key}`)} />

        <form >
            
        </form>
        </>
    )
}
export default Event;
