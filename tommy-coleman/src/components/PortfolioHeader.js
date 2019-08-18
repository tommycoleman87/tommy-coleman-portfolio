import React from 'react';
import portfolioheader from '../assets/portfolioheader.jpg';
import { Header, Img } from '../styles/headerStyles';

const PortfolioHeader = () => {
    return (
        <Header>
            <Img src={portfolioheader} alt='A desk set up with a laptop and coffee'/>
        </Header>
    )
}

export default PortfolioHeader;
