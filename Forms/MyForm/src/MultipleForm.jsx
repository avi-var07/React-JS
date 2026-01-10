import React, { useState } from "react";
// use state is used as control component. useref for uncontrolled
function MultipleForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    console.log(name)
  };
  return (
    <form>
        <label>First Name:</label><br></br>
      <input name="firstName" value={formData.firstName} onChange={handleChange} /><br></br>
      <label>Last Name:</label><br></br>
      <input name="lastName" value={formData.lastName} onChange={handleChange} /><br></br>
      <label>Email:</label><br></br>
      <input name="email" value={formData.email} onChange={handleChange} /><br></br>
      <label>Address:</label><br></br>
      <input name="address" value={formData.address} onChange={handleChange} /><br></br>
      <input type="submit" />
    </form>
  );
}
export default MultipleForm