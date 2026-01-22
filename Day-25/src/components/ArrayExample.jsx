import React, { useState } from 'react'

const ArrayExample = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const handleClick = () => {
    setData([...data, input]);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleClick}>Click to add</button>
      {data.length > 0 ? (
        data.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      ) : (
        <p style={{ color: "white" }}>No data found</p>
      )}
    </div>
  )
}

export default ArrayExample
