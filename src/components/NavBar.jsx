import React from 'react'
import logo from '../images/index.png';
import './NavBar.css';

const  NavBar= () => {
  return (
    
      <nav className='navs'>
        <ul>Home</ul>
        <ul>Destination</ul>
        <ul>Our Package</ul>
        <ul><img className='logo1' src={logo} alt="" /></ul>
        <ul>About Us</ul>
        <ul>Blog</ul>
        <ul>Contact Us</ul>
      </nav>

  )
}

export default NavBar
