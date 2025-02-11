import React from 'react'
import Header from "components/Header/Header";
import Footer from "components/Header/Footer"
import SouthKoreaList from './SouthKoreaList';

const SouthkoreaUni = () => {
  return (
    <div className='main'>
        <Header/>
        <SouthKoreaList/>
        <Footer/>
    </div>
  )
}

export default SouthkoreaUni