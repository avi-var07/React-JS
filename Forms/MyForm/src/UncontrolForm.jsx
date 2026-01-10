import React, { useRef } from "react";
function UnControlForm() {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input value: ${inputRef.current.value}`);
  };
  return (
    <form onSubmit={handleSubmit}>
        <label>User Name:</label><br></br>
      <input type="text" ref={inputRef}/><br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
export default UnControlForm