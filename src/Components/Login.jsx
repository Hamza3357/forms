import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
    const [firstName, setFirstName] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(false);


    // handling Login
    function handleLogin () {
        if (localStorage.getItem(firstname == firstName && password == password)){
            setIsLogin(true)
        }
    }

  return (
    <div className='flex flex-col'>  
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} class="form-control"  placeholder="First Name" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
<button className='bg-green-500 ' onClick={handleLogin}>login</button>
<Link className='bg-blue-300' to="/Signup">Signup</Link>

    </div>
  )
}

export default Login