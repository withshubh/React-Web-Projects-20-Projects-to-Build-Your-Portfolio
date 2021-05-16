import proudCoderLightSVG from './../../../img/undraw_proud_coder_light.svg';
import feelingProudLightSVG from './../../../img/undraw_feeling_proud_light.svg';
import conceptualIdeaLight from './../../../img/undraw_conceptual_idea_light.svg';
import './About.scss';

function AboutSection() {
  return (
    <section class='dark-light-main__about' id='about'>
      <h1>Undraw Illustrations</h1>
      <div class='about-container'>
        <div class='image-container'>
          <h2>Web Innovation</h2>
          <img src={proudCoderLightSVG} alt='Coder Light' id='img-one' />
        </div>
        <div class='image-container'>
          <h2>Problem Solving</h2>
          <img src={feelingProudLightSVG} alt='Proud Coder' id='img-two' />
        </div>
        <div class='image-container'>
          <h2>High Concept</h2>
          <img src={conceptualIdeaLight} alt='Conceptual Light' id='img-three' />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
