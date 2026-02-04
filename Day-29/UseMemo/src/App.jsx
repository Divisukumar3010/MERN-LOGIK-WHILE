import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseMemoExample from './components/UseMemoExample'
import UseCallBack from './components/UseCallBack'
import CounterComponent from './components/CounterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseMemoExample />
      <UseCallBack />
      <CounterComponent/>
    </>
  )
}

export default App
