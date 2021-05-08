import SquareLoader from './Components/Animation/SquareLoader';
import ImageLoader from './Components/ImageLoader/ImageLoader';

import classes from './InfinityScrollApp.module.scss';

function InfinityScrollApp() {
  const { 'main-container': mainContainer } = classes;

  return (
    <main className={mainContainer}>
      <h1>UNSPLASH API - INFINITY SCROLL</h1>
      <SquareLoader />
      <ImageLoader />
    </main>
  );
}

export default InfinityScrollApp;
