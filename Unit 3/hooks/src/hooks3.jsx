import React, { useState } from 'react';

const Hook4 = () => {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");

  const handleSubmit = (e) => {
    alert(`Name: ${name}, Branch: ${branch}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input 
          type="text" 
          name="name" 
          onChange={(e) => setName(e.target.value)}
        />
        <br/><br/>

        <label>Branch: </label>
        <input 
          type="text" 
          name="branch" 
          onChange={(e) => setBranch(e.target.value)}
        />
        <br/><br/>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Hook4;
