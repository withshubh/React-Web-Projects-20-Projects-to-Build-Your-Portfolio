import './About.scss';

function AboutSection({ ...images }) {
  const { imageOne, imageTwo, imageThree } = images;
  return (
    <section className='dark-light-main__about' id='about'>
      <h1>Undraw Illustrations</h1>
      <div className='about-container'>
        <div className='image-container'>
          <h2>Web Innovation</h2>
          <img src={imageOne} alt='Coder Light' id='img-one' />
        </div>
        <div className='image-container'>
          <h2>Problem Solving</h2>
          <img src={imageTwo} alt='Proud Coder' id='img-two' />
        </div>
        <div className='image-container'>
          <h2>High Concept</h2>
          <img src={imageThree} alt='Conceptual Light' id='img-three' />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
