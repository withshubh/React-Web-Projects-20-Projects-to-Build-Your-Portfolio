import { useLocation, Link } from 'react-router-dom';

function LinkToProjects() {
  const { pathname } = useLocation();

  let link = '';

  if (pathname === '/') {
    link = (
      <>
        <Link to='/animated-template'>Animated Template</Link>
        <Link to='/dark-light-mode'>Dark & Light Mode</Link>
        <Link to='/infinity-scroll'>Infinity Scroll</Link>
        <Link to='/joke-teller'>Joke Teller</Link>
        <Link to='/navigation-nation'>Navigation Nation</Link>;
        <Link to='/picture-in-picture'>Picture In Picture</Link>;
        <Link to='/quote-generator'>Quote Generator</Link>
      </>
    );
  }
  return <>{link}</>;
}

export default LinkToProjects;
