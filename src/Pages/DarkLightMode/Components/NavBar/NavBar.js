import './NavBar.scss';

function NavBar({ isDarkMode, ...darkModeObject }) {
  const { dark, light } = darkModeObject.backgroundColor;
  return (
    <nav className='dark-light-main__navbar' style={{ backgroundColor: isDarkMode ? dark : light }}>
      <a href='#home'>HOME</a>
      <a href='#about'>ABOUT</a>
      <a href='#projects'>PROJECTS</a>
      <a href='#contact'>CONTACT</a>
    </nav>
  );
}

export default NavBar;
