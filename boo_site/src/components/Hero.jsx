import React from 'react'
import {dallas} from '../assets'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => (
    <div id="home">
      <video src={dallas} autoPlay muted />
      <div className='overlay items-center flex' >
        <h1 className='text-center text-4xl font-poppins text-white'>
          <TypeAnimation 
           sequence = {['Hey!', 3000, 'Wanna hear a knock knock joke?', 2000,
           'Knock Knock', 5000, 'Allah', 2500, 'Akbar', 2000, '' ]}
           wrapper="div"
           cursor={true} />
        </h1>
      </div>
    </div>
  )

export default Hero