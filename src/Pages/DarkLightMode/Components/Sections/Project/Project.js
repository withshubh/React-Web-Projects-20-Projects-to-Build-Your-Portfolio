import './Project.scss';

function ProjectsSection() {
  return (
    <section class='dark-light-body__projects' id='projects'>
      <h1>Buttons</h1>
      <div class='buttons'>
        <button class='primary'>Primary</button>
        <button class='secondary'>Secondary</button>
        <button class='primary' disabled>
          Disabled
        </button>
        <button class='outline'>Outline</button>
        <button class='secondary outline'>Alt Outline</button>
        <button class='outline' disabled>
          Disabled
        </button>
      </div>
      <div class='text-box' id='text-box'>
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
