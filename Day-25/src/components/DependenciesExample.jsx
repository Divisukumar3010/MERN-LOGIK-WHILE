import React, { useEffect, useState } from 'react'

const DependenciesExample = () => {
  const [increment,setIncrement] = useState(0)
  const [increment1,setIncrement1] = useState(2)
  const [increment2, setIncrement2] = useState(3)
  useEffect(() => {
    console.log(increment);
    console.log(increment1);
    console.log(increment2);
  },[increment1,increment2]) // iseEffect render every time when the component is rendered, the dependencies are used to tell when the useEffect has to render
  return (
    <div>
      <button onClick={() => {setIncrement(increment+1)}}>increment</button>
      <button onClick={() => {setIncrement1(increment1+2)}}>increment1</button>
      <button onClick={() => {setIncrement2(increment2+3)}}>increment2</button>
    </div>
  )
}

export default DependenciesExample