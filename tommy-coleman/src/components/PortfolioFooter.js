import React from 'react';
import githublogo from '../assets/githublogo.png'
import linkedinlogo from '../assets/linkedinlogo.png'
import Twitter_Logo_Blue from '../assets/Twitter_Logo_Blue.png'
import { FooterImg, FooterContainer, IconDiv } from '../styles/footerStyles'
const PortfolioFooter = () => {
    return (
        <FooterContainer>
            <h1>Contact</h1>
            <p>E-Mail: tommycoleman87@gmail.com</p>
            <IconDiv>
            <a href='https://github.com/tommycoleman87' target='_blank'><FooterImg src={githublogo} /></a>
            <a href='https://www.linkedin.com/in/tommy-coleman-028151a4/' target='_blank'><FooterImg src={linkedinlogo} /></a>
            <a href='https://twitter.com/Tommyleecoleman' target='_blank'><FooterImg src={Twitter_Logo_Blue} /></a>
            </IconDiv>
        </FooterContainer>
    )
}

export default PortfolioFooter;