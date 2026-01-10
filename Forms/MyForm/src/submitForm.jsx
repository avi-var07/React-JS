import React, { useState } from 'react';
function SubmitForm() {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();  // Stop page reload
    if (email.trim() === '') {
      alert('Email cannot be empty');
      return;
    }
    alert(`Form submitted with email: ${email}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default SubmitForm;