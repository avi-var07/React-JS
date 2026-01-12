import React, {useState} from "react";

function FormValidation(){
    const [formData, setFormData] = useState({
        name:"",
        email:""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]:value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newErrors = {};

        if(formData.name.trim()==="")newErrors.name = "Name is required";
        if(formData.email.trim()==="")newErrors.email = "Email is required";
        else if(!formData.email.includes("@"))newErrors.email = "Invalid";

        if(Object.keys(newErrors).length>0){
            setErrors(newErrors);
            return;
        }
        
        console.log("Form Submitted", formData);
        setErrors({});
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name ="name" value ={formData.name} placeholder="Enter Name: " onChange={handleChange}/>
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}

            <input type="email" name="email" value={formData.email} placeholder="Enter Email: " onChange = {handleChange}/>
            {errors.email &&<p style={{color:"red"}}>{errors.email}</p>}

            <button type="Submit">Submit</button>
        </form>
        </>
    );
}
export default FormValidation;