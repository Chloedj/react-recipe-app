import React from 'react'
import './community.css'
import CommunityRecipe from '../../components/communityrecipe/communityrecipe'
import recipeData from './recipedata';
import stripe from '../../assets/stripe.png'

const Community = () => {
  return (
    <div className='community__container'>
      <div className='community__container-title'>
        <h3>From Our Community</h3>
        </div>
      <div className='community__container-cards'>
        {recipeData.map((project) => (
          <CommunityRecipe key={project.id} {...project} />
        ))}
      </div>
      <div className='community__container-stripe'>
        <img src={stripe} alt='stripe' />
      </div>
    </div>
  )
}

export default Community
