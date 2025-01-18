import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Header/Footer'
import Eventpage from '../components/Eventscomp/Eventpage'
import './Home.css'
const Events = () => {
  return (
    <div className='main'>
        <Header/>
<Eventpage/>
        <Footer/>

    </div>
  )
}

export default Events