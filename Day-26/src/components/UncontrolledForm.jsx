import React, { useRef } from 'react'

export const UncontrolledForm = () => {
  const inputref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Value:  ${inputref.current.value}!!`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputref} placeholder="Enter Value" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}