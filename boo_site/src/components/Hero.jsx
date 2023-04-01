import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => (
    <div id="home">
      <video src="https://firebasestorage.googleapis.com/v0/b/boosite-7d475.appspot.com/o/dallasdrone.mp4?alt=media&token=bb816fd4-bd89-4c7f-8f6f-af2b4f959bb5" autoPlay muted playsInline/>
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