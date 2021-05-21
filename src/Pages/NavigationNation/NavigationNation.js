import { useState, useRef } from 'react';

import MenuOverlay from './Components/MenuOverlay/MenuOverlay';
import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import MainSection from './Components/MainSections/MainSections';

function NavigationNation() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef(null);

  function onClickToggleNavHandler(e) {
    setIsOpen(!isOpen);
    const menuBar = e.currentTarget;

    // Toggle Menu active
    toggleClassName(overlay, 'overlay-active');

    if (containsClassName(overlay, 'overlay-active')) {
      replaceClassNameAnimation(overlay, 'overlay-slide-left', 'overlay-slide-right');

      // Animate In - Nav Items
      // setNavAnimationDirection('out', 'in');
    } else {
      // Animate Out - Overlay
      replaceClassNameAnimation(overlay, 'overlay-slide-right', 'overlay-slide-left');

      // Animate Out - Nav Items
      // setNavAnimationDirection('in', 'out');
    }
  }

  // Toggling the className for the specific element
  function toggleClassName(element, className) {
    element.classList.toggle(className);
  }

  // Return true or false if the className exist
  function containsClassName(element, className) {
    return element.classList.contains(className);
  }

  // Use the element to exchange class Name
  function replaceClassNameAnimation(element, classNameOne, classNameTwo) {
    return element.classList.replace(classNameOne, classNameTwo);
  }

  // Control Navigation Animation
  // function setNavAnimationDirection(directionOne, directionTwo) {
  //   let increment = 1;
  //   for (const navItem of navItems) {
  //     const count = increment++;
  //     navItem.classList.replace(`slide-${directionOne}-${count}`, `slide-${directionTwo}-${count}`);
  //   }
  // }

  return (
    <>
      {/* {overlayContent} */}
      <MenuOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainSection />
    </>
  );
}

export default NavigationNation;
