import React from 'react'
import { useState } from 'react';

const Text = () => {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  return (
    <div>
      <input type="text" value={text} onInput={(e) => setText(e.target.value)} />
      {/* <p>{text}</p> */}
      <button onClick={() => setDisplayText(text)}>click Me</button>
      <h1>{displayText}</h1>
    </div>
  )
}

export default Text