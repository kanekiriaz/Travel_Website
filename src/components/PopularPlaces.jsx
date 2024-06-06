import React from 'react';
import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';
import image5 from '../images/5.png';
import './PopularPlaces.css';
import image6 from '../images/6.png';

const PopularPlaces = () => {
  return (
    <div className='big-container'>
        <div className='image-container1'> 
            <img src={image1} className='images-places' alt="" />
            <img src={image2} className='images-places' alt="" />
            <img src={image3} className='images-places' alt="" />
    
        </div>
        <div className='image-container2'>
            <img src={image4} className='images-places' alt="" />
            <img src={image5} className='images-places1' id='placesunique' alt="" />
            <img src={image6} className='images-places' alt="" />
        </div>
   
    </div>
  )
}

export default PopularPlaces
