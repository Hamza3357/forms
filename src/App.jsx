import React, { Component, useState } from 'react'
import TodoList from './Components/TodoList';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
        </>
  );
}

export default App