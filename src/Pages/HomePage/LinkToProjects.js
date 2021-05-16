import { useLocation, Link } from 'react-router-dom';

function LinkToProjects() {
  const { pathname } = useLocation();

  let link = '';

  if (pathname === '/') {
    link = (
      <>
        <Link to='/dark-light-mode'>Dark & Light Mode</Link>
        <Link to='/quote-generator'>Quote Generator</Link>
        <Link to='/infinity-scroll'>Infinity Scroll</Link>
        <Link to='/joke-teller'>Joke Teller</Link>
        <Link to='/picture-in-picture'>Picture In Picture</Link>;
      </>
    );
  }
  return <>{link}</>;
}

export default LinkToProjects;
