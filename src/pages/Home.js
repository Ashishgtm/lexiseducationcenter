import React from 'react'
import './Home.css'
import Header from '../components/Header/Header'
import HomeA from '../components/Homecomps/HomeA'
import HomeB from '../components/Homecomps/HomeB'
import HomeC from '../components/Homecomps/HomeC'
import HomeD from '../components/Homecomps/HomeD'
import Contact from '../components/Homecomps/contact'
import Footer from '../components/Header/Footer'
import Growth from '../components/Homecomps/Growth'
export const Home = () => {
  
  return (
    <div className='main'>

      <Header/>
      <HomeA/>
      <HomeB/>
      <HomeC/>
      <Growth/>
      <HomeD/>
      <Contact/>
      <Footer/>
        </div>
  )
}

