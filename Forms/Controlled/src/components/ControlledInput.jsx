import React, {useState} from "react";
function ControlledInput(){
    const [name, setName] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name);
    }
    const handleChange= (e)=>{
        setName(e.target.value);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>

            <input type="text" value={name} placeholder="Enter Name: " onChange={handleChange}/>
            <button type="Submit">Submit</button>


        </form>
        <h1>Name: {name}</h1>
        
        </>
    )
}
export default ControlledInput;