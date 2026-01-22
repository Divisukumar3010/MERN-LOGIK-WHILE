import React, { useRef } from 'react'

const useRefExample = () => {
  const ref = useRef();
  const handleClick = () => {
    ref.current.focus();
  }
  return (
    <div>
      <input type="text" ref={ref} />
      <input type="text" />
      <button onClick={handleClick}>Focus</button>
    </div>
  )
}

export default useRefExample