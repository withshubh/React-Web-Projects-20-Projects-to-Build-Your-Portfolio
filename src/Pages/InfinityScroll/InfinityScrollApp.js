import { useState, useEffect } from 'react';

import SquareLoader from './Components/Animation/SquareLoader';
import ImageLoader from './Components/ImageLoader/ImageLoader';

import classes from './InfinityScrollApp.module.scss';

function InfinityScrollApp() {
  const apiKey = 'azDEgfUl7cGcx8ALUFh1hFLFbAvQ8IGwnR29V5lpfXM';
  let unsplashApi = '';

  // initial Image that is starting to load
  let imagesLoaded = 0;
  // Track of the total iamges so we know when it's done loading everything
  let totalImages = 0;

  const [photoData, setPhotoData] = useState([]);
  const [photoContent, setPhotoContent] = useState([]);
  const [initialCount, setinitialCount] = useState(10);
  const [initialLoading, setInitialLoading] = useState(true);
  const { 'main-container': mainContainer } = classes;

  useEffect(() => {
    unsplashApi = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialCount}`;

    fetch(unsplashApi)
      .then((res) => res.json())
      .then((photos) => {
        if (initialLoading) setPhotoData(photos);
      })
      .catch((err) => console.log(err));
    return setInitialLoading(false);
  }, []);

  function updateAPIURLWithNewCount(picCount) {
    return `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${picCount}`;
  }

  async function generateNewPhotos() {
    imagesLoaded = 0;
    try {
      const response = await fetch(updateAPIURLWithNewCount(30));
      const photoData = response.json();

      photoData.then((photos) => {
        const photoItem = photos.map((photo) => (
          <ImageLoader
            key={photo.id}
            initialLoading={initialLoading}
            {...photo}
            loadImageHandler={loadImageHandler}
          />
        ));

        setPhotoContent((prevPhoto) => {
          return [...prevPhoto, photoItem];
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  function loadImageHandler() {
    imagesLoaded++;

    if (imagesLoaded === totalImages) {
      setInitialLoading(false);
      // loader.hidden = true;
    }
  }

  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight + window.scrollY;
    const fullHeightImage = document.body.offsetHeight - 1000;

    if (windowHeight >= fullHeightImage) {
      setInitialLoading(true);
      generateNewPhotos();
    }
  });

  return (
    <main className={mainContainer}>
      <h1>UNSPLASH API - INFINITY SCROLL</h1>
      <SquareLoader />
      {photoData.map((photo) => {
        return <ImageLoader key={photo.id} initialLoading={initialLoading} {...photo} />;
      })}
      {photoContent}
      {/* <button onClick={generateNewPhotos}>ny bilde</button> */}
    </main>
  );
}

export default InfinityScrollApp;
