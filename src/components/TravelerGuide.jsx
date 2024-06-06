import React from 'react';
import './TravelerGuide.css';
import image from '../images/popular-places1.png';


const TravelerGuide = () => {
  return (
    <div className='traveler-guide'>
        
      <div className="context1">
        <h3>A Traveler's Guide to Breathtaking Viewpoints</h3>
        <p>This blog could showcase the world's most stunning viewpoints and scenic 
spots. Each post could feature a different viewpoint, such as mountaintop 
lookouts, panoramic city vistas, or picturesque coastal cliffs, offering 
practicaladvice for getting there, capturing the best photos, and enjoying 
the breathtaking scenery.</p>
    <br />
    <button type='button' className='btn'> Read More</button>
      </div>
      <div className="image">
        <img src={image} alt=""  className='images1'/>
      </div>
    </div>
  )
}

export default TravelerGuide
