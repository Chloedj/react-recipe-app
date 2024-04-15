import React from 'react';
import './recipecard.css';
import timeicon from '../../assets/timeicon.png';
import servingicon from '../../assets/servingicon.png';
import difficultyicon from '../../assets/difficultyicon.png';

const RecipeCard = ({ imgUrl, time, serving, difficulty, title }) => {
  return (
    <div className='recipe__card-container'>
      <div className='recipe__card-image'>
        <img src={imgUrl} alt='recipe_image' />
        <div className='recipe__card-overlay-details'>
          <div>
            <img className='recipe__card-image-icon' src={timeicon} alt='time icon' />
            <p>{time} mins</p>
          </div>
          <div>
            <img className='recipe__card-image-icon' src={servingicon} alt='serving icon' />
            <p>{serving} Servings</p>
          </div>
          <div>
            <img className='recipe__card-image-icon' src={difficultyicon} alt='difficulty icon' />
            <p>{difficulty}</p>
          </div>
        </div>
      </div>
      <div className='recipe__card-details'>
      <h3>{title}</h3>
      <a href="#home">View Recipe</a>
    </div></div>
  );
}

export default RecipeCard;
