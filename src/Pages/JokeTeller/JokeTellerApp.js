import { useState, useEffect, useRef } from 'react';
import VoiceRSS from './text-to-speech';

import './JokeTeller.scss';

function JokeTellerApp() {
  const jokeAudioPlayer = useRef(null);
  const jokeBox = useRef(null);
  const jokeText = useRef(null);
  const button = useRef(null);
  const [fetchingAudio, setFetchingAudio] = useState(true);

  // VoiceRSS Speech Function
  function tellVoiceJoke(joke) {
    const jokeString = joke.trim().replace(/ /g, '%20');

    // VoiceRSS Speech Parameters
    VoiceRSS(jokeAudioPlayer.current).speech({
      // Normally, don't write out API Keys like this, but an exception made here because it's free.
      key: 'e985f868e96c46d9b0789c3855350152',
      src: jokeString,
      hl: 'en-us',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false,
    });
  }

  function tellVoiceText(joke) {
    jokeText.current.textContent = joke;
  }

  useEffect(() => {
    async function getJokes() {
      let jokeMessage = '';
      const apiUrl =
        'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
      try {
        const response = await fetch(apiUrl);
        const { setup, delivery, joke } = await response.json();

        if (fetchingAudio) {
          if (setup) {
            // Assign One or Two Part Joke
            jokeMessage = `${setup} ... ${delivery}`;
          } else {
            jokeMessage = joke;
          }

          // Reset to get new Text
          resetText(jokeMessage);

          // Passing joke to Textbox from voiceRSS API
          tellVoiceText(jokeMessage);

          // Passing Joke Voice from VoiceRSS API
          tellVoiceJoke(jokeMessage);

          enableTextBox();

          // Disable Button
          toggleButton();
        }
      } catch (error) {
        // Catch Error Here
        console.log(error);
      }
    }

    // The ref value below will likely have changed by the time this effect cleanup function runs.
    // If this ref points to a node rendered by React, copy 'jokeAudioPlayer.current' to a variable inside the effect,
    // and use that variable in the cleanup function

    const audioButton = button.current;
    const audioElement = jokeAudioPlayer.current;

    if (audioButton) {
      button.current.addEventListener('click', getJokes);
      audioElement.addEventListener('ended', toggleButton);
    }

    return () => {
      setFetchingAudio(false);
      audioButton.removeEventListener(getJokes);
      audioElement.addEventListener('ended', toggleButton);
    };
  }, []);

  function resetText(jokeMessage) {
    if (jokeMessage) jokeText.current.textContent = '';
  }

  function enableTextBox() {
    jokeBox.current.hidden = false;
  }

  // Disable button clicking on the joke
  // re-enable when the joke has finished
  function toggleButton() {
    button.current.disabled = !button.current.disabled;
  }

  // jokeAudioPlayer.current.addEventListener('ended', toggleButton);

  return (
    <div className='joke-body'>
      <div className='joke-container'>
        <div className='joke-container__text-box' ref={jokeBox} hidden>
          <p ref={jokeText}></p>
        </div>
        <button ref={button}>Tell me a joke</button>
        <audio ref={jokeAudioPlayer} controls hidden></audio>
      </div>
    </div>
  );
}

export default JokeTellerApp;
