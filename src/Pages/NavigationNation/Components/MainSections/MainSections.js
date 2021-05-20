import './MainSections.scss';

function MainSections() {
  return (
    <main className='main-navigation-nation-section'>
      <section className='main-navigation-nation__home' id='home'>
        <a href='#'>Navigation Nation</a>
      </section>
      <section className='main-navigation-nation__about' id='about'>
        <h1>Learn More About Me</h1>
      </section>
      <section className='main-navigation-nation__skills' id='skills'>
        <h1>These Are My Strengths</h1>
      </section>
      <section className='main-navigation-nation__projects' id='projects'>
        <h1>These Are My Results</h1>
      </section>
      <section className='main-navigation-nation__contact' id='contact'>
        <h1>Available Anytime</h1>
      </section>
    </main>
  );
}

export default MainSections;
