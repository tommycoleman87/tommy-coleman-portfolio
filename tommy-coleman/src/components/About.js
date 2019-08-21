import React from 'react';
import tommycolemanprofile from '../assets/tommycolemanprofile.jpg';
import { ProfileImg } from '../styles/tabStyles'
const About = () => {
    return (
        <div>
            <div><ProfileImg src={tommycolemanprofile} alt='Tommy Coleman Profile' /></div>
            <div><h1>Hello, I'm Tommy</h1>
            <p>I am a full stack web developer in Tampa, Fl. Versed in the MERN stack with a love of Javascript and React. </p></div>
        </div>

    )
}

export default About;