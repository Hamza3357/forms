import React, { Component, useState } from 'react'
import Forms from './Components/Forms';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
        </>
  );
}

export default App