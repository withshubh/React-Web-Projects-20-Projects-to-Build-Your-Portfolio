import React from 'react';
import ToggleIcon from './Components/ToggleIcon/ToggleIcon';
import NavBar from './Components/NavBar/NavBar';
import HomeSection from './Components/Sections/Home/Home';
import AboutSection from './Components/Sections/About/About';
import ProjectSections from './Components/Sections/Project/Project';
import ContactSection from './Components/Sections/Contact/Contact';

import './DarkLightMode.scss';

function DarkLightMode() {
  return (
    <main className='dark-light-main'>
      <ToggleIcon />
      <NavBar />
      <HomeSection />
      <AboutSection />
      <ProjectSections />
      <ContactSection />
    </main>
  );
}

export default DarkLightMode;
