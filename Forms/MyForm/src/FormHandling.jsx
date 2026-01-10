import React, { useState } from 'react';
function FormHandling() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent page reload
    alert(`Form submitted with input: ${inputValue}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter something:
        <input type="text" value={inputValue} onChange={handleChange}/>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default FormHandling