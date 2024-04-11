import React from 'react'
import './hero.css'
import plate from '../../assets/plate.png'
import Garlic from '../../assets/Garlic.png'
import Tomato from '../../assets/Tomato.png'

const Hero = () => {
  return (
    <div>
      <div className='recipe__hero section__padding' id="#home">
        <div className="recipe__hero-content">
           <img src={Tomato} alt="Tomato" className="Tomato" />
      <h1>
        
  <span className="h1-block">Cooking Made Fun</span>
  <span className="h1-block"> and Easy: Unleash </span>
  <span className="h1-block">Your Inner Chef</span>
</h1>
      <p>Discover more than <span className='accent'>10,000 recipes</span> in your hand with the<br /> best recipe. Help you to find the easiest way to cook</p>
      <img src={Garlic} alt="Garlic" className="Garlic" />
      <div className="recipe__hero-content__input">
        <button type="button" class="button">Explore Recipes</button>
      </div>
    </div>

    <div className="recipe__hero-image">
      <img src={plate} alt='plate'/>
    </div>
      </div>
         </div>
    
  )
}

export default Hero
