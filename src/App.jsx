import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import HireUs from './Pages/HireUs';
import { ToastContainer } from 'react-toastify';
import ContactUs from './Pages/Contact';
import WebDevelopment from './Pages/WebDevelopment';
import AndroidApps from './Pages/AndroidApps';
import IosApps from './Pages/IosApps';
import GraphicDesign from './Pages/GraphicDesign';
import SQAPage from './Pages/SQA';

const App = () => {
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hire-us" element={<HireUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/services/web" element={<WebDevelopment/>}/>
        <Route path="/services/android-development" element={<AndroidApps/
        >}/>
        <Route path="/services/ios-development" element={<IosApps/
        >}/>
        <Route path="/services/graphic-design" element={<GraphicDesign/
        >}/>
        <Route path="/services/sqa" element={<SQAPage/
        >}/>
      </Routes>
    </div>
  )
}

export default App