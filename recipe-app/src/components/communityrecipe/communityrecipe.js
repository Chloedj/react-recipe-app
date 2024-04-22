import React from 'react'
import './communityrecipe.css'
import stars from '../../assets/5stars.png'
import like from '../../assets/like.png'
import share from '../../assets/share.png'

const CommunityRecipe = ({author, authorimage, name, description, recipeImageUrl, likes}) => {
  return (
    <div className='community__recipe-container'>
      <div className='community__recipe-details'>
        <img src={authorimage} alt='author' />
        <div>
        <h3>{name}</h3>
        <p>{author}</p>
        </div>
      </div>
      <div className='community__recipe-description'>
        <img src={stars} alt='5 stars' />
        <p>{description}</p>
      </div>
      <div className='community__recipe-image'>
      <img src={recipeImageUrl} alt='recipe' />
      </div>
      <img src={like} alt='like' />
      <h5>{likes}</h5>
      <img src={share} alt='share' />
      <h5>Share</h5>
    </div>
  )
}

export default CommunityRecipe
