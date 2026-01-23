import React, { useState } from 'react'

export const ControlledForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="Enter email" required />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter password" required />
        <button type="submit">Submit</button>
        <h3>{form.email}</h3>
        <h3>{form.password}</h3>
      </form>
    </div>
  )
}
