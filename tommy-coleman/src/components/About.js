import React from 'react';
import tommycolemanprofile from '../assets/tommycolemanprofile.jpg';
import { ProfileImg, AboutDiv } from '../styles/tabStyles'
const About = () => {
    return (
        <AboutDiv>
            <div><ProfileImg src={tommycolemanprofile} alt='Tommy Coleman Profile' /></div>
            <div><h1>Hello, I'm Tommy</h1>
            <p>I am a full stack web developer in Tampa, Fl. Versed in the MERN stack with a love of Javascript and React. </p></div>
        </AboutDiv>

    )
}

export default About;