import React from 'react';
import './about.css';
import backgroundImage from '../../assets/aboutimage.png'; 

const About = () => {
  return (
    <div className='about__container' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='about__container-content'>
        <div className='about__container-details'>
          <h3>About Us</h3>
          <p>Our recipes are the heart and soul of our culinary community, and they reflect our commitment to providing you with memorable and delightful dining experiences.</p>
          <div className='about__container-details-button'>
        <button type='button'><a href="#home">Learn More</a></button>
      </div>
          </div>
      </div>
    </div>
  );
}

export default About;
