import React from 'react'
import './appCTA.css'
import appstore from '../../assets/appstore.png'
import googleplay from '../../assets/googleplay.png'
import iphone from '../../assets/iphone.png'

const AppCTA = () => {
  return (
    <div className='appCTA__container section__padding'>
      <div className='appCTA__content'>
        <h3>Embrace the joy of cooking with get it on your iPhone or Android Your kitchen adventure begins now!</h3>
        <div className='appCTA__content-appdownload'>
          <img src={appstore} alt='appstore' />
          <img src={googleplay} alt='googleplay' />
        </div>
      </div>
      <div className='appCTA__image'>
          <img src={iphone} alt='iphone' />
      </div>
    </div>
  )
}

export default AppCTA
