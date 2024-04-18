import React from 'react'
import './community.css'
import CommunityRecipe from '../../components/communityrecipe/communityrecipe'

const Community = () => {
  return (
    <div className='community__container'>
      <div className='community__container-title'>
        <h3>From Our Community</h3>
        </div>
      <div className='community__container-cards'>
        <CommunityRecipe />
      </div>
    </div>
  )
}

export default Community
