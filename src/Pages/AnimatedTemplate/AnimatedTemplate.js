import { useCSSLink, useScript } from './../../utils/useScript';
import './AnimatedTemplate.scss';

function AnimatedTemplate() {
  useCSSLink('https://unpkg.com/aos@2.3.1/dist/aos.css');
  useScript('https://unpkg.com/aos@2.3.1/dist/aos.js');
  return <div></div>;
}

export default AnimatedTemplate;
