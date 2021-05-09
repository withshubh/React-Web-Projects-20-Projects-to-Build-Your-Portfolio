import React from 'react';
import classes from './PictureButton.module.scss';

function PictureButton() {
  const { 'picture-body__button-container': PictureBodyButtonContainer } = classes;
  return (
    <div class={PictureBodyButtonContainer}>
      <button id='picture-button'>START</button>
    </div>
  );
}

export default PictureButton;
