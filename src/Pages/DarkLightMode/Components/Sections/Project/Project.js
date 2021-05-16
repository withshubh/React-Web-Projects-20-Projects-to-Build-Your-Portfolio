import './Project.scss';

function ProjectsSection({ isDarkMode, ...darkModeObject }) {
  const { lightText, darkText } = darkModeObject.textBoxBackgroundColor;

  return (
    <section className='dark-light-body__projects' id='projects'>
      <h1>Buttons</h1>
      <div className='buttons'>
        <button className='primary'>Primary</button>
        <button className='secondary'>Secondary</button>
        <button className='primary' disabled>
          Disabled
        </button>
        <button className='outline'>Outline</button>
        <button className='secondary outline'>Alt Outline</button>
        <button className='outline' disabled>
          Disabled
        </button>
      </div>
      <div className='text-box' style={{ backgroundColor: isDarkMode ? lightText : darkText }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto ducimus cum
          dolore laborum beatae rerum aliquam possimus earum sunt? Numquam possimus veritatis
          accusamus consectetur quidem. Quasi cumque soluta error!
        </p>
      </div>
    </section>
  );
}

export default ProjectsSection;
