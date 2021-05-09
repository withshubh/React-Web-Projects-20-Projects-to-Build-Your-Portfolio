import svgLoader from '../../img/square-loader.svg';
import classes from './SquareLoader.module.scss';

function SquareLoader() {
  const { 'main-container__loader': MainContainerLoader } = classes;
  return (
    <div className={MainContainerLoader} id='infinity-loader' hidden>
      <img src={svgLoader} alt='Infinity Loading' />
    </div>
  );
}

export default SquareLoader;
