import React from 'react'
import ProjectCard from './ProjectCard'
import {layout} from '../style';
import {projects} from '../constants'


const Projects = () => {

  
  return (
    <section id="projects" className={`${layout.section} items-center`} >
      {
        projects.map((project, index) => {
          return(
              <ProjectCard 
                key={index}
                {...project}
              />
          )
        })
      }
    </section>
  );
}

export default Projects