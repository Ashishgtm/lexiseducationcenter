import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Header/Footer'
import Teampage from '../components/Teamcomps/Teampage'
import './Home.css'

const Team = () => {
  return (
    <div className='main'>
        <Header/>
<Teampage/>
        <Footer/>
    </div>
  )
}

export default Team