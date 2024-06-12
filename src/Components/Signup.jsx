import React, { useState } from 'react'


const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    
// handling signup
function handleSigup () {
  if((firstName === null || lastName === null || password ===null) || (firstName === '' || lastName === '' || password === '') ){
    alert('Fill all the Fields')
  }
  else{
    localStorage.setItem("firstname", JSON.stringify(firstName))
    localStorage.setItem("lastname", JSON.stringify(lastName))
    localStorage.setItem("password", JSON.stringify(password))
    alert('Congratulations you are registered')
    console.log(firstName);
    console.log(lastName);
    console.log(password);
    setFirstName("")
    setLastName("")
    setPassword("") 
  }
}
  return (
    <div>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} class="form-control"  placeholder="First Name" />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} class="form-control"  placeholder="Last Name" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button className='bg-green-300 mx-3' onClick={handleSigup} >Submit</button>
     
  </div>
  )
}

export default Signup