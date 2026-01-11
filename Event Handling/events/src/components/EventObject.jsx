import React from "react";
function EventObject() {

  const handleChange = (event) => {
    console.log(event.target.value);
    alert("Kyu ?");
  };

  return (
    <input type="text" onChange={handleChange} />
  );
}
export default EventObject;
