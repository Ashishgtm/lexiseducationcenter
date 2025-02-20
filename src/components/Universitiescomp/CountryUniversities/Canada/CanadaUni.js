import Footer from 'components/Header/Footer'
import Header from 'components/Header/Header'
import React from 'react'
import CanadaList from './CanadaList'

const CanadaUni = () => {
  return (
    <div className='main'>
        <Header/>
        <CanadaList/>
        <Footer/>
    </div>
  )
}

export default CanadaUni