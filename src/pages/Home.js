import React,{useEffect} from 'react'
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
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0); // Scroll to top
      document.body.style.zoom = '80%'; 
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
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

