import React from 'react'
import image from '../images/blogs1.png';
import image1 from '../images/blogs2.png';
import image2 from '../images/blogs3.png';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='blog-container'>
        
            <h1 className='contents1'>Blogs</h1>
            <p className='contents2'>Discover the beauty, challenge, and tranquility that come with venturing 
            into high altitudes.Mountain Adventures" is your ultimate guide. </p>
        <div className="details">
            <div className="card1">
                <img src={image}alt="" />
                <h3>Cultural Heritage Through 
                    Design and Creativity
                </h3>
                <p>This blog could showcase the world's most
                    stunning viewpoints and scenic spots. Each 
                    post could feature a different viewpoint, 
                    such as mountaintop lookouts, panoramic 
                    city vistas, or picturesque coastal cliffs, 
                    offering practical advice for getting there, 
                    capturing the best photos, and enjoying 
                    the breathtaking scenery.
                </p>
                <button>Read More</button>

            </div>
            <div className="card2">
                <img src={image1}alt="" />
                <h3>Scenic Views and Spectacular
                    Sights
                </h3>
                <p>This blog could showcase the world's most
                    stunning viewpoints and scenic spots. Each 
                    post could feature a different viewpoint, 
                    such as mountaintop lookouts, panoramic 
                    city vistas, or picturesque coastal cliffs, 
                    offering practical advice for getting there, 
                    capturing the best photos, and enjoying 
                    the breathtaking scenery.
                </p>
                <button>Read More</button>
            </div>
            <div className="card3">
                <img src={image2}alt="" />
                <h3>Exploring the World Through
                    Food and Drink
                </h3>
                <p>This blog could showcase the world's most
                    stunning viewpoints and scenic spots. Each 
                    post could feature a different viewpoint, 
                    such as mountaintop lookouts, panoramic 
                    city vistas, or picturesque coastal cliffs, 
                    offering practical advice for getting there, 
                    capturing the best photos, and enjoying 
                    the breathtaking scenery.
                </p>
                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Blogs
