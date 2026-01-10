import React, { useState } from 'react';

const Hook3=()=>{
    const [name,setName]=useState("Ritik kumar");
    const [branch,setBranch]=useState("Computer Science");

    return(
        <>
        <p>Your name: {name}</p>
        <p>Your branch: {branch}</p>
        </>
    )
};
export default Hook3;