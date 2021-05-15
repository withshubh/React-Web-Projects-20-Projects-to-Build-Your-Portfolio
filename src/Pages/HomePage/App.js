import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import InfinityScroll from '../InfinityScroll/InfinityScrollApp';
import PictureInPicture from '../PictureInPicture/PictureinPictureApp';
import JokeTeller from '../JokeTeller/JokeTellerApp';
import QuoteContainer from '../QuoteGenerator/Components/Container/QuoteContainer';
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
          <Route path='/joke-teller' component={JokeTeller} />
          <Route path='/picture-in-picture' component={PictureInPicture} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
