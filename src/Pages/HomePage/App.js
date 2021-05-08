import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import QuoteContainer from '../QuoteGenerator/Components/Container/QuoteContainer';
import InfinityScroll from '../InfinityScroll/InfinityScrollApp';
import LinkToProjects from './LinkToProjects';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <LinkToProjects />
        <Switch>
          <Route path='/quote-generator' component={QuoteContainer} />
          <Route path='/infinity-scroll' component={InfinityScroll} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
