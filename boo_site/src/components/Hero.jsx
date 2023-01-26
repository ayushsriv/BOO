import React from 'react'
import {dallasdrone} from '../assets'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => (
    <div id="home">
      <video src={dallasdrone} autoPlay muted playsInline/>
      <div className='overlay flex' >
        <h1 className='text-4xl font-poppins text-white'>
          <TypeAnimation 
           sequence = {["Hey!", 3000, "Careful", 2000,
           "This site is under contruction", 3000, ""]}
           wrapper="div"
           cursor={true} />
        </h1>
      </div>
    </div>
  )

export default Hero