import { useState, useEffect, useRef } from 'react';
import PictureButton from './PictureButton';
import classes from './PictureInPicture.module.scss';

function PictureInPictureApp() {
  const videoRef = useRef(null);
  const videoButtonRef = useRef(false);

  const [videoActive, setVideoActive] = useState(true);

  const { 'picture-body': pictureBody } = classes;

  useEffect(() => {
    async function selectMediaStream() {
      try {
        if (videoActive) {
          // Waiting to assign the video media stream when the user has selected which screen or window they want to share
          const mediaStream = await navigator.mediaDevices.getDisplayMedia();

          // We pass the mediaStream to the videoElement of the src attribute
          videoRef.current.srcObject = mediaStream;

          // When video has loaded the meta Data, then it's going to call the function to play the video
          videoRef.current.onloadedmetadata = () => videoRef.current.play();
        }
      } catch (err) {
        // Easier to locate the bug if there is an error on the console window
        console.error('selectMediaStream() error:', err);
      }
    }
    selectMediaStream();
    return setVideoActive(false);
  }, []);

  async function displayVideoHandler() {
    try {
      videoButtonRef.current.disabled = true;
      await videoRef.current.requestPictureInPicture();
      videoButtonRef.current.disabled = false;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className={pictureBody}>
      <video ref={videoRef} controls width='640' height='360' hidden />
      <PictureButton displayVideoHandler={displayVideoHandler} ref={videoButtonRef} />
    </main>
  );
}

export default PictureInPictureApp;
