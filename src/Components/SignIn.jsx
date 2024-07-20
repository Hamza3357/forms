import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../store/slices/userSlice';
import Signup from './Signup';
import { useDispatch, useSelector } from 'react-redux';


const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { signInStatus, authenticated } = useSelector((state) => state.user);

  const [credentials, setCredentials] = useState({
      email: "",
      password: ""
  });

  const handleChange = (event) => {
      const { name, value } = event.target;
      setCredentials({
          ...credentials,
          [name]: value
      });
  };

  const handleSignIn = (event) => {
      event.preventDefault();
      dispatch(signIn(credentials));
    
  };

  useEffect(() => {
    if (authenticated) {
        navigate("/todoList");
    }
}, [authenticated, navigate]);

  return (
      <form onSubmit={handleSignIn}>
          <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
          />
          <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Password"
          />
          <button className="bg-green-300 mx-3" type="submit">
              Sign In
          </button>
          {signInStatus && <p>{signInStatus}</p>}
      </form>
  );
};

export default SignIn;