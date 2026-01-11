import React from "react";
function EventHandle(){
    const handleClick = ()=>{
        alert("Why did you click? ");
    };
    const click=(name, age)=>{
        alert("Clicked by: "+name+" Age: "+age);
    }
    return(
        <>
        <button onClick = {handleClick}>Do Not Click!</button>
        <button onDoubleClick = {()=>click("Aviral", 20)}>Do Not Double Click!</button>
        </>
    );
}
export default EventHandle;