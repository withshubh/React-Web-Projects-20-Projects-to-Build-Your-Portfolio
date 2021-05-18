import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useState, useEffect } from 'react';
import { useCSSLink } from './../../utils/useScript';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Footer from './Components/Footer';

function AnimatedTemplate() {
  const [loading, setLoading] = useState(true);
  const cdnTailWindCSS = useCSSLink(
    'https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.min.css'
  );

  useEffect(() => {
    if (loading) {
      // eslint-disable-next-line no-undef
      AOS.init({
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        delay: 200, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      });
    }

    return () => {
      setLoading(false);
    };
  }, [cdnTailWindCSS]);

  return (
    <div className='text-gray-800 antialiased'>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default AnimatedTemplate;
