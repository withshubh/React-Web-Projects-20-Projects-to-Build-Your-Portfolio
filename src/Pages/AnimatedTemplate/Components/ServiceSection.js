function ServiceSection() {
  return (
    <section className='pb-20 bg-gray-300 -mt-24'>
      {/* 3 Card Section  */}
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          {/*  Card  */}
          <div
            className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'
            data-aos='fade-right'
            data-aos-delay='1200'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400'>
                  {/*  Icon  */}
                  <i className='fas fa-robot'></i>
                </div>
                {/* Text Box  */}
                <h6 className='text-xl font-semibold'>I'm A Robot</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus autem
                  maxime expedita aspernatur tempora.
                </p>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            className='w-full md:w-4/12 px-4 text-center'
            data-aos='fade-up'
            data-aos-delay='1400'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                  {/*  Icon  */}
                  <i className='fas fa-atom'></i>
                </div>
                {/*  Text Box  */}
                <h6 className='text-xl font-semibold'>Atom Power</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia nemo ex
                  aut temporibus, in molestiae earum ratione.
                </p>
              </div>
            </div>
          </div>
          {/*  Card  */}
          <div
            className='pt-6 w-full md:w-4/12 px-4 text-center'
            data-aos='fade-left'
            data-aos-delay='1600'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400'>
                  {/*  Icon  */}
                  <i className='fas fa-bolt'></i>
                </div>
                {/*  Text Box  */}
                <h6 className='text-xl font-semibold'>Infinite Energy</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ipsa
                  veritatis error ratione sunt repudiandae, quasi atque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Box and Card Container */}
        <div className='flex flex-wrap items-center mt-32'>
          {/* Text Box Container  */}
          <div className='w-full md:w-5/12 px-4 mr-auto ml-auto' data-aos='zoom-in-right'>
            {/*  Text Box  */}
            <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100'>
              {/*  Icon  */}
              <i className='fas fa-star text-xl'></i>
            </div>
            <h3 className='text-3xl mb-2 font-semibold leading-normal'>
              Trying New Things is Great!
            </h3>
            <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, dolores? Saepe
              aspernatur necessitatibus explicabo.
            </p>
            <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At repellat obcaecati
              tenetur officia distinctio! A voluptates numquam, neque libero molestiae natus facere
              temporibus!
            </p>
            <a
              href='https://www.creative-tim.com/framework/tailwind-starter-kit'
              className='font-bold text-gray-800 mt-8'>
              Check Tailwind Starter Kit!
            </a>
          </div>

          {/* Image Cap & Text Card  */}
          <div
            className='w-full md:w-4/12 px-4 mr-auto ml-auto'
            data-aos='flip-left'
            data-aos-delay='1000'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-orange-500'>
              {/*  Image */}
              <img
                alt='...'
                src='https://images.unsplash.com/photo-1621115167265-02c73f05d70a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                className='w-full align-middle rounded-t-lg'
              />
              <blockquote className='relative p-8 mb-4'>
                {/*  Making Polygon Shape in Card  */}
                <svg
                  preserveAspectRatio='none'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 583 95'
                  className='absolute left-0 w-full block'
                  style={{ height: '95px', top: '-94px' }}>
                  <polygon
                    points='-30,95 583,95 583,65'
                    className='text-orange-500 fill-current'></polygon>
                </svg>
                {/*  Text Box  */}
                <h4 className='text-xl font-bold text-white'>More Than Meets The Eye</h4>
                <p className='text-md font-light mt-2 text-white'>
                  I feel like I've mentioned before that I'm a robot and that continues to be true,
                  even to this day.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
