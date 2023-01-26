import React from 'react';
import styles from '../style';

const ProjectCard = ({title, description, img, url}) => {
  return (
    <div className='card flex-row'>
        <img src={img}/>
        <h1 className='text-2xl font-poppins my-5'><a target="_blank" rel="noopener noreferrer" href={url}>{title}</a></h1>
        <p className={`${styles.paragraph} text-black text-left`} >{description}</p>
    </div>
  )
}

export default ProjectCard