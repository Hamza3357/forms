import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'


const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

    const handleChange = (event) => {
      const {name, value} = event.target
      setUser({
        ...user, [name]: value
      })

    }
    let registeruser = []
// handling signup
function handleSigup () {
  if(( user.email === null || user.password ===null) || (user.email === '' || user.password === '') ){
    alert('Fill all the Fields')
  }
  else if(registeruser){ 
     registeruser.forEach((item, id) => {
    if(item.email == user.email){
      alert("already registered")
    }
  }) }
 
//  (user.email === registeruser.email) {
//     alert("already registered")
//   }
  else {
    registeruser.push(user)
    console.log("regist", registeruser)
    localStorage.setItem("users", JSON.stringify(registeruser))

    alert('You are registered')

    setUser({ 
      email: '',
      password: ''})
  }


}
  return (
    <div className='flex flex-col'>
     
     
      <input type="email" name='email' value={user.email} onChange={handleChange} class="form-control"  placeholder="Email" />
      <input type="password" name='password' minlength="3" value={user.password} onChange={handleChange} placeholder="Password" />
      <button className='bg-green-300 mx-3' onClick={handleSigup} >Submit</button>

      <Link to="/Login" className='bg-blue-300'>Login</Link>
   
  </div>
  )
}

export default Signup