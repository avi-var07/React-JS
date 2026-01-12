import React, {useState} from "react";

function Register(){
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({formData});
    }
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };
    return(
        <>
        <form onSubmit={handleSubmit}>

            <input type="text" name="name" value = {formData.name} placeholder="Enter name: " onChange={handleChange}/>
            <input type="email" name="email" value = {formData.email} placeholder="Enter email: " onChange={handleChange}/>
            <input type="password" name="password" value = {formData.password} placeholder="Enter password: " onChange={handleChange}/>

            <h1>Name: {formData.name}</h1>
            <h1>Email: {formData.email}</h1>
            <h1>Password: {formData.password}</h1>
            <button type="Submit">Register</button>
        </form>
        
        </>
    )
}
export default Register;