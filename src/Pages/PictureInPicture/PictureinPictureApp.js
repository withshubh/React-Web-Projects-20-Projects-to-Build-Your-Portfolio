import React from 'react';
import PictureButton from './PictureButton';
import classes from './PictureInPicture.module.scss';

function PictureInPictureApp() {
  const { 'picture-body': pictureBody } = classes;
  console.log(classes);
  return (
    <main className={pictureBody}>
      <video id='picture-video' controls width='640' height='360' hidden></video>
      <PictureButton />
    </main>
  );
}

export default PictureInPictureApp;
