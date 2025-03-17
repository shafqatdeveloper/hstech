import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import HireUs from "./Pages/HireUs";
import { ToastContainer } from "react-toastify";
import ContactUs from "./Pages/Contact";
import WebDevelopment from "./Pages/WebDevelopment";
import Footer from "./Components/Footer/Footer";
import AndroidApps from "./Pages/AndroidApps";
import IosApps from "./Pages/IosApps";
import GraphicDesign from "./Pages/GraphicDesign";
import SQAPage from "./Pages/SQA";
import ServicesPage from "./Pages/Services";
import TeamPage from "./Pages/Team"
import Testimonials from "./Pages/Testimonials";
import CreateProject from "./Pages/CreateProject";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/hire-us" element={<HireUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services/web" element={<WebDevelopment />} />
        <Route path="/services/android-development" element={<AndroidApps />} />
        <Route path="/services/ios-development" element={<IosApps />} />
        <Route path="/services/sqa" element={<SQAPage />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/project/admin/create" element={<CreateProject />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
