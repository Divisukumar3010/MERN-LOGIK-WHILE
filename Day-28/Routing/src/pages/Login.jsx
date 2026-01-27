import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/dashboard');
  }

  return (
    <div>Login
      <button onClick={handleClick}>Go to Dashboard</button>
    </div>
  )
}

export default Login