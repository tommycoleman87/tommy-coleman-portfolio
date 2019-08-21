import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Div } from '../styles/tabStyles';


const PortfolioTabs = (props) => {
    return (
        <Div>
            <Tab panes={props.panes} />
        </Div>
    )
}



export default PortfolioTabs;