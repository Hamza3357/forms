import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({
      ...user, [name]: value
    })
  }

  function handleSignup() {
    if (user.email === '' || user.password === '') {
      alert('Fill all the Fields')
      return;
    }

    // Retrieve existing users from local storage
    let registeruser = JSON.parse(localStorage.getItem('users')) || []

    // Check if the user is already registered
    const userExists = registeruser.some(item => item.email === user.email)
    if (userExists) {
      alert("User is already registered")
      return;
    }

    // Add the new user to the list
    registeruser.push(user)
    localStorage.setItem("users", JSON.stringify(registeruser))

    alert('You are registered')

    // Reset the user state
    setUser({
      email: '',
      password: ''
    })
  }

  return (
    <div className='flex flex-col'>
      <input 
        type="email" 
        name='email' 
        value={user.email} 
        onChange={handleChange} 
        className="form-control" 
        placeholder="Email" 
      />
      <input 
        type="password" 
        name='password' 
        minLength="3" 
        value={user.password} 
        onChange={handleChange} 
        placeholder="Password" 
      />
      <button 
        className='bg-green-300 mx-3' 
        onClick={handleSignup} 
      >
        Submit
      </button>
      <Link to="/Login" className='bg-blue-300'>Login</Link>
    </div>
  )
}

export default Signup
