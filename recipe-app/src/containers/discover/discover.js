import React from 'react'
import './discover.css'
import { recipe1, recipe2, recipe3, recipe4, recipe5, recipe6 } from './imports'
import RecipeCard from '../../components/recipecard/recipecard'

const Discover = () => {
  return (
    <div>
    <div className='recipe__discover-title section__padding'>
      <div className='recipe__discover-title-content'>
      <h2>Discover, Create, Share</h2>
      <p>Check our most popular recipes of this week</p>
      </div>
      <div className='recipe__discover-title-button'>
        <button type='button'><a href="#home">See All</a></button>
      </div>
    </div>
    <div className='recipe__discover-cards'>
      <div className='recipe__discover-cards-container'>
        <RecipeCard imgUrl={recipe1} title="Creamy Salad" time="10" serving="2" difficulty="Easy"/>
        <RecipeCard imgUrl={recipe2} title="Tofu Tomatoes Soup" time="15" serving="3" difficulty="Easy"/>
        <RecipeCard imgUrl={recipe3} title="Crunchy Potatoes" time="10" serving="2" difficulty="Easy"/>
        <RecipeCard imgUrl={recipe4} title="Mushroom Soup" time="25" serving="2" difficulty="Medium"/>
        <RecipeCard imgUrl={recipe5} title="Raspberry Pancake" time="30" serving="1" difficulty="Easy"/>
        <RecipeCard imgUrl={recipe6} title="Beef Teriyaki" time="20" serving="1" difficulty="Medium"/>
      </div>
    </div>
   </div>
  )
}

export default Discover
