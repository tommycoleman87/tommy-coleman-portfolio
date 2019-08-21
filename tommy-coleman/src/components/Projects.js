import React from 'react';
import hpprojectthumbnail from '../assets/hpprojectthumbnail.jpg'
import {ProjectImg} from '../styles/projectStyles';
const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div>
                <h2>Harry Potter House Points Project</h2>
                <a href='https://redux-app-uahmz1vn6.now.sh/' target='_blank'><ProjectImg src={hpprojectthumbnail} /></a>
            </div>
        </div>
    )
}

export default Projects;