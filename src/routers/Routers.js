
// import React from 'react'
// import { Routes, Route, Navigate,BrowserRouter} from 'react-router-dom'
// import { Home } from '../pages/Home';
// import { Services } from '../pages/Services';
// import Universities from '../pages/Universities';
// import Contact from '../pages/Contact';
// import Team from '../pages/Team';
// import Aboutus from '../pages/Aboutuspage';
// import SouthkoreaUni from '../components/Universitiescomp/CountryUniversities/SouthKorea/SouthkoreaUni';

// const Routers = () => {
//   return ( 
//     <BrowserRouter>
//   <Routes>
     
//      <Route path='/' element={<Navigate to='/home'/>} />
//      <Route path='/home' element={<Home />} />
// <Route path='/services' element={<Services/>} />
// <Route path='/universities' element={<Universities/>} />
// <Route path='/southkoreauni' element={<SouthkoreaUni/>} />

// <Route path='/contact' element={<Contact/>} />
// <Route path='/team' element={<Team/>}/>
// <Route path='/about' element={<Aboutus/>}/>



//   </Routes>
//   </BrowserRouter>
//   );
// } 
// export default Routers



import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import Universities from "../pages/Universities";
import Contact from "../pages/Contact";
import Team from "../pages/Team";
import Aboutus from "../pages/Aboutuspage";
import SouthkoreaUni from "../components/Universitiescomp/CountryUniversities/SouthKorea/SouthkoreaUni";

const BlankPage = () => <div style={{ backgroundColor: "white", height: "100vh" }}></div>;

const Routers = () => {
  const [showBlank, setShowBlank] = useState(true);

  useEffect(() => {
    // Show blank page for 5 seconds, then revert back to normal routes
    const timer = setTimeout(() => setShowBlank(false), 120000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {showBlank ? (
          <Route path="*" element={<BlankPage />} />
        ) : (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/southkoreauni" element={<SouthkoreaUni />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<Aboutus />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
