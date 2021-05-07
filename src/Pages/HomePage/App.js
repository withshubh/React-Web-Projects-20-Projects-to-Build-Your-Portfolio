import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import QuoteContainer from '../QuoteGenerator/Container/QuoteContainer';
import LinkToProjects from './LinkToProjects';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <LinkToProjects />
        <Switch>
          <Route path='/quote-generator' component={QuoteContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
