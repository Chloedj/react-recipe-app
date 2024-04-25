import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <div className='footer__container section__padding'>
        <img src={logo} alt='logo' />
        <div className='footer__container-menu'>
          <h3>Menu</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#recipe">Recipe</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#about">About</a></li>      
          </ul>
        </div>
        <div className='footer__container-categories'>
          <h3>Categories</h3>
          <ul>
            <li><a href="#breakfast">Breakfast</a></li>
            <li><a href="#lunch">Lunch</a></li>
            <li><a href="#dinner">Dinner</a></li>
            <li><a href="#dessert">Dessert</a></li>   
            <li><a href="#drink">Drink</a></li>      
          </ul>
        </div>
        <div className='footer__container-social'>
          <h3>Social</h3>
          <ul>
            <li><a href="#home">Instagram</a></li>
            <li><a href="#recipe">Twitter</a></li>
            <li><a href="#community">YouTube</a></li>
            <li><a href="#about">Facebook</a></li>      
          </ul>
        </div>
        <div className='footer__container-newsletter'>
          <h3>Sign up for our newsletter</h3>
          <form>
            <input type="email" placeholder='Your Email Address' />
            <button type='submit'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
