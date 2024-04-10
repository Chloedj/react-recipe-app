import React from 'react'
import './hero.css'
import plate from '../../assets/plate.png'

const Hero = () => {
  return (
    <div>
      <div className='recipe__hero section__padding' id="#home">
        <div className="recipe__header-content">
      <h1 className="recipe__header-content__h1">Cooking Made Fun and Easy: Unleash Your Inner Chef</h1>
      <p>Discover more than <span className='recipe__header-content__span'>10,000 recipes</span> in your hand with the best recipe. Help you to find the easiest way to cook</p>

      <div className="recipe__header-content__input">
        <button type="button">Explore Recipes</button>
      </div>
    </div>

    <div className="recipe__header-image">
      <img src={plate} alt='plate'/>
    </div>
      </div>
    </div>
  )
}

export default Hero
