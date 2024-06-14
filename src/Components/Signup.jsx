import React, { useState } from 'react'


const Signup = () => {
  const [registeredUsers, setRegisteredUsers] = useState([])
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

    const handleChange = (event) => {
      const {name, value} = event.target
      setUser({
        ...user, [name]: value
      })

    }
// handling signup
function handleSigup () {
  if((user.firstName === null || user.lastName === null || user.email === null || user.password ===null) || (user.firstName === '' || user.lastName === '' || user.email === '' || user.password === '') ){
    alert('Fill all the Fields')
  }
  else{
    setRegisteredUsers((prev) => {
      [...prev, user]
    });
    localStorage.setItem("users", JSON.stringify(user))

    alert('Congratulations you are registered')
    console.log(user);

  }
}
  return (
    <div>
      <input type="text" name='firstName' value={user.firstName} onChange={handleChange}  class="form-control"  placeholder="First Name" />
      <input type="text" name='lastName' value={user.lastName} onChange={handleChange} class="form-control"  placeholder="Last Name" />
      <input type="email" name='email' value={user.email} onChange={handleChange} class="form-control"  placeholder="Email" />
      <input type="password" name='password' value={user.password} onChange={handleChange} placeholder="Password" />
      <button className='bg-green-300 mx-3' onClick={handleSigup} >Submit</button>
     
  </div>
  )
}

export default Signup