import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import AnimatedTemplate from '../AnimatedTemplate/AnimatedTemplate';
import DarkLightMode from '../DarkLightMode/DarkLightMode';
import InfinityScroll from '../InfinityScroll/InfinityScrollApp';
import JokeTeller from '../JokeTeller/JokeTellerApp';
import LinkToProjects from './LinkToProjects';
import NavigationNation from './../NavigationNation/NavigationNation';
import PictureInPicture from '../PictureInPicture/PictureinPictureApp';
import QuoteContainer from '../QuoteGenerator/Components/Container/QuoteContainer';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <LinkToProjects />
        <Switch>
          <Route path='/animated-template' component={AnimatedTemplate} />
          <Route path='/dark-light-mode' component={DarkLightMode} />
          <Route path='/infinity-scroll' component={InfinityScroll} />
          <Route path='/joke-teller' component={JokeTeller} />
          <Route path='/navigation-nation' component={NavigationNation} />
          <Route path='/picture-in-picture' component={PictureInPicture} />
          <Route path='/quote-generator' component={QuoteContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
