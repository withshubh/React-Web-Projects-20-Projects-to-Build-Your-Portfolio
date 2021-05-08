import { useLocation, Link } from 'react-router-dom';

function LinkToProjects() {
  const { pathname } = useLocation();

  let link = '';

  if (pathname === '/') {
    link = (
      <>
        <Link to='/quote-generator'>Quote Generator</Link>
        <Link to='/infinity-scroll'>Infinity Scroll</Link>
      </>
    );
  }
  return <>{link}</>;
}

export default LinkToProjects;
