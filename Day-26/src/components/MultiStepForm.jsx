import React from 'react'

export const MultiStepForm = () => {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    name: "",
    email: ""
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(data));
  }
  return (
    <div>
      <form>
        {step === 1 && (
          <>
            <input type="text" name='name' value={data.name} onChange={handleChange} placeholder='Name' />
            <button type='button' onClick={next}>Next</button>
          </>
        )}
        {step === 2 && (
          <>
            <input type="email" name='email' value={data.email} onChange={handleChange} placeholder='Email' />
            <button type='button' onClick={prev}>Previous</button>
            <button type='submit' onClick={handleSubmit}>Submit</button>
          </>
        )}
      </form>
    </div>
  )
}

export default MultiStepForm