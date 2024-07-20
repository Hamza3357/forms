import React, { Component, useState } from 'react'
import TodoList from './Components/TodoList';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';

import SignIn from './Components/SignIn';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Signup />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
        </>
  );
}

export default App