import './App.css'
import { BasicForm } from './components/BasicForm'
import { UncontrolledForm } from './components/UncontrolledForm'
import { FormWithValidation } from './components/FormWithValidation'
import MultiStepForm from './components/MultiStepForm'


function App() {
  return (
    <>
      <BasicForm/>
      <UncontrolledForm />
      <FormWithValidation />
      <MultiStepForm />
    </>
  )
}

export default App
