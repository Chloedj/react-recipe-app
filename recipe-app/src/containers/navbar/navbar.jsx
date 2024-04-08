import React, { useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import signin from '../../assets/signin.png'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
          <p><a href="#recipe">Recipe</a></p>
          <p><a href="#community">Community</a></p>
          <p><a href="#about">About Us</a></p>
          </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='recipe__navbar'>
      <div className='recipe__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
      <div className='recipe__navbar-links'>
       
        <div className='recipe__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='recipe__navbar-search'>
        <img src={search} alt="search"/>
        
        <button type='button'><img src={signin} alt="signin"/></button>
      </div>
       <div className='recipe__navbar-menu'>
        {toggleMenu ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='recipe__navbar-menu_container scale-up-center'>
            <div className='recipe__navbar-menu_container-links'>
<Menu />
<div className='recipe__navbar-menu_container-links-sign'>
        <img src={search} alt="search"/>
        <button type='button'><img src={signin} alt="signin"/></button>
      </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
