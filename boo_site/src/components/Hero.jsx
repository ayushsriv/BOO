import React from 'react'
import {dallas} from '../assets'

const Hero = () => (
    <div className='hero'>
      <div className='Overlay'></div>
        <video src={dallas} autoPlay loop muted />
        <div className="content">
          <h1>Welcome</h1>
          <p>To my site.</p>
        </div>
    </div>
  )
  
export default Hero