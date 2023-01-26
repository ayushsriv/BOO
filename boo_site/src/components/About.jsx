import React from 'react';
import Three from './Three';
import styles, {layout} from '../style';

const About = () => {
  return (
    <section id="about" className={`${layout.section} items-center`} >
      <div className={`${layout.sectionInfo}`}>
        <h1 className="text-4xl font-poppins  text-white border-b-4 border-emerald-600 ">About</h1>
        <p className={`${styles.paragraph} min-w-[300px] max-w-[470px] mt-5`}>I received my BS from UT Austin in 2020 and moved to Dallas where I am currently working as an Analyst for Goldman Sachs. 
        Throughout my studies and recent work life I have realized that what compels me to work is meaningful and creative projects alongside passionate and compassionate colleagues. I try to show my zest for creativity by participating in Hackathons, working on nutty side projects, and occasionally composing music. I am currently interested in developments in the field of AR/VR, human-centered AI, applications of quantum physics, and discovering thought provoking books.
        </p>
      </div>
      <div className="three" >
        <Three /> 
      </div>
    </section>
  )
}

export default About