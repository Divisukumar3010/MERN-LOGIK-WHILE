import { useState } from 'react'
import Toggle from './components/Toggle'
import ArrayExample from './components/ArrayExample'
import ObjectExample from './components/ObjectExample'
import DependenciesExample from './components/DependenciesExample'
import UseRefExample from './components/useRefExample'

function App() {
  return (
    <>
      <Toggle />
      <ArrayExample />
      <ObjectExample />
      <DependenciesExample />
      <UseRefExample />
    </>
  )
}

export default App
