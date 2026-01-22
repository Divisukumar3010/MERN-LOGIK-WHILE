import React, { useState } from 'react'

const Toggle = () => {
  const [text, setText] = useState(false);
  return (
    <div>
      {text && <p>This is Hidden Text.</p>}
      <button onClick={() => setText(!text)}>{text ? "show" : "hide"}</button>
    </div>
  )
}

export default Toggle;