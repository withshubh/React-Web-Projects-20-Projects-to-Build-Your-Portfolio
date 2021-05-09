import { useState, useEffect } from 'react';

import SquareLoader from './Components/Animation/SquareLoader';
import ImageLoader from './Components/ImageLoader/ImageLoader';

import classes from './InfinityScrollApp.module.scss';

function InfinityScrollApp() {
  let photoContent = '';
  const [photoData, setPhotoData] = useState([]);
  const [initialCount, setinitialCount] = useState(10);
  const [initialLoading, setInitialLoading] = useState(true);
  const { 'main-container': mainContainer } = classes;

  useEffect(() => {
    const apiKey = 'azDEgfUl7cGcx8ALUFh1hFLFbAvQ8IGwnR29V5lpfXM';
    let unsplashApi = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialCount}`;

    fetch(unsplashApi)
      .then((res) => res.json())
      .then((photos) => {
        if (initialLoading) setPhotoData(photos);
      })
      .catch((err) => console.log(err));

    return setInitialLoading(false);
  }, []);

  if (initialLoading === false) {
    photoContent = photoData.map((photo) => <ImageLoader {...photo} />);
  }

  return (
    <main className={mainContainer}>
      <h1>UNSPLASH API - INFINITY SCROLL</h1>
      <SquareLoader />
      {photoContent}
    </main>
  );
}

export default InfinityScrollApp;
