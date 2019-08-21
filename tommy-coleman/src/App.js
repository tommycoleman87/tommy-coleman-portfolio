import React, {useState} from 'react';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioTabs from './components/PortfolioTabs';
import Projects from './components/Projects';
import PortfolioFooter from './components/PortfolioFooter';
import About from './components/About';
import './App.css';
import { Tab } from 'semantic-ui-react';

function App() {
  const [panes,] = useState([
    { menuItem: 'About', render: () => <Tab.Pane><About /> </Tab.Pane>},
    { menuItem: 'Projects', render: () => <Tab.Pane><Projects /> </Tab.Pane> },
])
  return (
    <div className="App">
      <PortfolioHeader />
      <PortfolioTabs panes={panes}/>
      <PortfolioFooter />
    </div>
  );
}

export default App;
