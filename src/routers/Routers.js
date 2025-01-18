
import React from 'react'
import { Routes, Route, Navigate,BrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home';
import { Services } from '../pages/Services';
import Universities from '../pages/Universities';
import Contact from '../pages/Contact';
import Team from '../pages/Team';
import Events from '../pages/Events';

const Routers = () => {
  return ( 
    <BrowserRouter>
  <Routes>
     
     <Route path='/' element={<Navigate to='/home'/>} />
     <Route path='/home' element={<Home />} />
<Route path='/services' element={<Services/>} />
<Route path='/universities' element={<Universities/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/team' element={<Team/>}/>
<Route path='/events' element={<Events/>}/>



  </Routes>
  </BrowserRouter>
  );
} 
export default Routers
