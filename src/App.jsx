import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import HireUs from './Pages/HireUs';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hire-us" element={<HireUs/>}/>
      </Routes>
    </div>
  )
}

export default App