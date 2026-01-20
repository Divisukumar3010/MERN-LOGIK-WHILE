import React from 'react'
import Home from './components/Home';
let obj = {
  name: "Adam",
  age: 26,
  details: {
    dno: 3 - 337,
    city: "Guntur"
  }
}
let name = "John";
const App = () => {
  return (
    <div>
      <Home obj={obj} name={name} />
    </div>
    
  )
}

export default App;