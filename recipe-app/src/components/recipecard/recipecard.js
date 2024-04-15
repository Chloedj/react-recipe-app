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
            <img src={timeicon} alt='time' />
            <p>{time} mins</p></div>
          <div>
            <img src={servingicon} alt='serving' />
            <p>{serving} Servings</p></div>
          <div>
            <img src={difficultyicon} alt='difficulty' />
            <p>{difficulty}</p></div>
        </div>
      </div>
      <h3>{title}</h3>
      <a href="#home">View Recipe</a>
    </div>
  );
}

export default RecipeCard;
