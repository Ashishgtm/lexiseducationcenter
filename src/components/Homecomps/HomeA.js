import React from 'react'
import './HomeA.css'
import { Link} from 'react-router-dom';


const HomeA = () => {
  return (
<div className='HomeAfirst'>
<div className='lexisfirst'>
  <div className='overlay-text'>
  Study beyond borders,  
  <div className='overlay-text2'>
    succeed without limits
    <div className='overlay-text3'>
 <span className='dashh'> | </span>For Impact-Driven Leaders

</div>
<Link to="/contact"><button class="call-to-action-btn">Schedule a Call to Learn More</button></Link>

    </div>
      </div>
   </div>

   </div>
)
}

export default HomeA