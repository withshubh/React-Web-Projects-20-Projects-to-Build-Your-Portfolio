import { forwardRef } from 'react';
import classes from './PictureButton.module.scss';

function PictureButton({ displayVideoHandler }, ref) {
  const { 'picture-body__button-container': PictureBodyButtonContainer } = classes;
  return (
    <div className={PictureBodyButtonContainer}>
      <button ref={ref} onClick={displayVideoHandler}>
        START
      </button>
    </div>
  );
}

export default forwardRef(PictureButton);
