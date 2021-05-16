import './NavBar.scss';

function NavBar() {
  return (
    <nav className='dark-light-main__navbar' id='dark-light-nav'>
      <a href='#home'>HOME</a>
      <a href='#about'>ABOUT</a>
      <a href='#projects'>PROJECTS</a>
      <a href='#contact'>CONTACT</a>
    </nav>
  );
}

export default NavBar;
