import React from 'react'
import { useState } from 'react';
import '../App.css';
const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <>
      count: {count}<br /><br />
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
      <button onClick={() => setcount(0)}>Reset</button>
    </>
  )
}

export default Counter