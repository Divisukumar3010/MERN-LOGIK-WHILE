import React, { useState } from 'react'

export const BasicForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello  ${name}!!`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}