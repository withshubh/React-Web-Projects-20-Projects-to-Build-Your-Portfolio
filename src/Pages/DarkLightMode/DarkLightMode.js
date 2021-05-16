import { useState, useRef } from 'react';
import ToggleIcon from './Components/ToggleIcon/ToggleIcon';
import NavBar from './Components/NavBar/NavBar';
import HomeSection from './Components/Sections/Home/Home';
import AboutSection from './Components/Sections/About/About';
import ProjectSections from './Components/Sections/Project/Project';
import ContactSection from './Components/Sections/Contact/Contact';

import proudCoderDarkSVG from './img/undraw_proud_coder_dark.svg';
import feelingProudDarkSVG from './img/undraw_feeling_proud_dark.svg';
import conceptualIdeaDarkSVG from './img/undraw_conceptual_idea_dark.svg';

import proudCoderLightSVG from './img/undraw_proud_coder_light.svg';
import feelingProudLightSVG from './img/undraw_feeling_proud_light.svg';
import conceptualIdeaLightSVG from './img/undraw_conceptual_idea_light.svg';

import './DarkLightMode.scss';

function DarkLightMode() {
  const rootElement = document.documentElement;
  const [darkModeActive, setDarkModeActive] = useState(false);
  const [images, setImages] = useState({
    imageOne: proudCoderLightSVG,
    imageTwo: feelingProudLightSVG,
    imageThree: conceptualIdeaLightSVG,
  });

  const darkModeObject = {
    backgroundColor: {
      light: 'rgba(0 0 0 / 0.5%)',
      dark: 'rgb(0 0 0 / 50%)',
    },
    textBoxBackgroundColor: {
      lightText: 'rgb(255 255 255 / 50%)',
      darkText: 'rgb(0 0 0 / 50%)',
    },
    textContent: {
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
    },
    className: {
      sun: 'fas fa-sun',
      moon: 'fas fa-moon',
    },
  };

  function switchImageMode(darkMode = true) {
    if (darkMode) {
      setImages((prevImages) => {
        return {
          ...prevImages,
          imageOne: proudCoderDarkSVG,
          imageTwo: feelingProudDarkSVG,
          imageThree: conceptualIdeaDarkSVG,
        };
      });
    } else {
      setImages((prevImages) => {
        return {
          ...prevImages,
          imageOne: proudCoderLightSVG,
          imageTwo: feelingProudLightSVG,
          imageThree: conceptualIdeaLightSVG,
        };
      });
    }
  }

  function switchThemeHandler(e) {
    const toggle = e.target.checked;

    if (toggle) {
      localStorage.setItem('theme', 'dark');
      rootElement.setAttribute('data-theme', 'dark');
      setDarkModeActive(true);
      switchImageMode(true);
    } else {
      localStorage.setItem('theme', 'light');
      rootElement.setAttribute('data-theme', 'light');
      setDarkModeActive(false);
      switchImageMode(false);
    }
  }

  return (
    <main className='dark-light-main'>
      <ToggleIcon
        switchThemeHandler={switchThemeHandler}
        isDarkMode={darkModeActive}
        {...darkModeObject}
      />
      <NavBar {...darkModeObject} isDarkMode={darkModeActive} />
      <HomeSection />
      <AboutSection {...images} />
      <ProjectSections {...darkModeObject} isDarkMode={darkModeActive} />
      <ContactSection />
    </main>
  );
}

export default DarkLightMode;
