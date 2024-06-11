import React, { useState } from 'react'

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
    <div>  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} class="form-control"  placeholder="First Name" />\
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
<button onClick={handleLogin}>login</button>
    </div>
  )
}

export default Login