import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './SignIn'
import { register } from '../store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const Signup = () => {
  const dispatch = useDispatch();
  const { registrationStatus } = useSelector((state) => state.user);

  const [user, setUser] = useState({
      firstName: "",
      email: "",
      password: ""
  });

  const handleChange = (event) => {
      const { name, value } = event.target;
      setUser({
          ...user,
          [name]: value
      });
  };

  const handleSignup = (event) => {
      event.preventDefault();
      dispatch(register(user));
      setUser({
        firstName: "",
        email: "",
        password: ""
      })
  };

  return (
    <div className='flex flex-col'>
   <form onSubmit={handleSignup}>
          <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              className="form-control"
              placeholder="FirstName"
          />
          <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
          />
          <input
              type="password"
              name="password"
              minLength="3"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
          />
          <button className="bg-green-300 mx-3" type="submit">
              Register
          </button>
          {registrationStatus && <p>{registrationStatus}</p>}
      </form>
      <Link to="/Signin" className='bg-blue-300'>Login</Link>
    </div>
   
  );
};

export default Signup;
