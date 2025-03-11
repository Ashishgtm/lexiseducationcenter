
import React from 'react'
import { Routes, Route, Navigate,BrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home';
import { Services } from '../pages/Services';
import Universities from '../pages/Universities';
import Contact from '../pages/Contact';
import Team from '../pages/Team';
import Aboutus from '../pages/Aboutuspage';
import SouthkoreaUni from '../components/Universitiescomp/CountryUniversities/SouthKorea/SouthkoreaUni';
import AmericaUni from 'components/Universitiescomp/CountryUniversities/America/AmericaUni';
import JapanUni from 'components/Universitiescomp/CountryUniversities/Japan/JapanUni';
import AustraliaUni from 'components/Universitiescomp/CountryUniversities/Australia/AustraliaUni';
import UkUni from 'components/Universitiescomp/CountryUniversities/Uk/UkUni';
import CanadaUni from 'components/Universitiescomp/CountryUniversities/Canada/CanadaUni';

const Routers = () => {
  return ( 
    <BrowserRouter>
  <Routes>
     
     <Route path='/' element={<Navigate to='/home'/>} />
     <Route path='/home' element={<Home />} />
<Route path='/services' element={<Services/>} />
<Route path='/universities' element={<Universities/>} />
<Route path='/Southkorea' element={<SouthkoreaUni/>} />
<Route path='/America' element={<AmericaUni/>}/>
<Route path='/Japan' element={<JapanUni/>}/>
<Route path='/Australia' element={<AustraliaUni/>}/>
<Route path='/UK' element={<UkUni/>}/>
<Route path='/Canada' element={<CanadaUni/>}/>


<Route path='/contact' element={<Contact/>} />
<Route path='/team' element={<Team/>}/>
<Route path='/about' element={<Aboutus/>}/>



  </Routes>
  </BrowserRouter>
  );
} 
export default Routers


