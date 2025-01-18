import React from 'react'
import './HomeB.css'
import manimage from './HomeBimage1'


const HomeB = () => {
  return (

    <div className='Homeb'>
          <section className="goals-section">

        <div className="goals-content">
        <h2>Commence with your goals</h2>
        <p>
        "Start where you are. Use what you have. Do what you can."
        </p>
        <ul>
          <li>
            <h4>Visa consultation</h4>
            <p>
              We provide professional visa consulting experts to assist you with
              all details and requirements specific to your goals.
            </p>
          </li>
          <li>
            <h4>Admissions advice</h4>
            <p>
              We’ll guide you from the very beginning till you gain admission in
              a college or university suitable to you.
            </p>
          </li>
          <li>
            <h4>Travel and stay</h4>
            <p>
              Need the best accommodation while studying abroad? We’ve got you
              covered.
            </p>
          </li>
        </ul>
      </div>
      <div className="goals-images">
        <img
          src="https://i.pinimg.com/736x/18/06/43/1806438b343308b261f3765342deaa74.jpg" // Replace this with the graduation image
          alt="Graduation"
          className="main-image"
        />
        
      </div>

</section>
<div className="container">
      <div className="imageman">
      <img src={manimage} alt="manimage"  />
      </div>

      <div className="text">
      <div className='aboutfirst'>About Us</div>
      <div className="turning">"Turning Your Ambitions into Achievements"</div>
        <p> At Lexis Education Center, we are passionate about helping students unlock their full potential by 
            connecting them with world-class educational opportunities across the globe. Our mission is to 
             the complex process of studying abroad and provide students with personalized guidance to ensure 
             a smooth and successful journey.
</p>
<p>
            Founded by a team of education enthusiasts and industry experts, we understand that every
         student’s path is unique. That’s why we offer tailored counseling services, taking into 
         account individual interests, academic backgrounds, and long-term career goals. Whether 
         it’s finding the right program, securing scholarships, or navigating visa procedures, we
            are here to support you every step of the way.</p>
            <button class="call-to-action-button">Learn More ...</button>

      </div>
    </div>


        
    </div>
  )
}

export default HomeB