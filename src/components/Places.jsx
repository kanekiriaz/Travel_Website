import React from 'react';
import image2 from '../images/Khumbu-glacier.jpeg';
import image3 from '../images/Gyoko-lakes.png';
import image4 from '../images/Kala-patthar.png';
import './Places.css';

const Places = () => {
  return (
    <div className='images'>
        <img src={image2} className="image2"alt="" /> 
        <img src={image3} className="image2"alt="" />
        <img src={image4} className="image2"alt="" />
        <div className='context'>   
            <h4>Popular Destination</h4>
            <p>we bring you the best recommendations for unforgettable experiences.</p>  
        </div>
    </div>
  )
}
export default Places
