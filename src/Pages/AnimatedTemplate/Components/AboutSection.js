import React from 'react';

function AboutSection() {
  return (
    <section className='relative py-20'>
      {/*  Making Polygon Shape in Background  */}
      <div
        className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
        style={{ height: '80px', transform: 'translateZ(0)' }}>
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'>
          <polygon className='text-white fill-current' points='2560 0 2560 100 0 100'></polygon>
        </svg>
      </div>
      {/*  Section Container  */}
      <div className='container mx-auto px-4'>
        <div className='items-center flex flex-wrap'>
          <div
            className='w-full md:w-4/12 ml-auto mr-auto px-4'
            data-aos='flip-right'
            data-aos-delay='1000'>
            {/*  Image  */}
            <img
              alt='...'
              className='max-w-full rounded-lg shadow-lg'
              src='https://images.unsplash.com/photo-1621102828690-70cc661c92b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            />
          </div>
          {/* Text Box Container */}
          <div className='w-full md:w-5/12 ml-auto mr-auto px-4' data-aos='zoom-in-left'>
            <div className='md:pr-12'>
              <div className='text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300'>
                {/* Icon */}
                <i className='fas fa-rocket text-xl'></i>
              </div>
              {/* Text Box */}
              <h3 className='text-3xl font-semibold'>A growing company</h3>
              <p className='mt-4 text-lg leading-relaxed text-gray-600'>
                The extension comes with three pre-built pages to help you get started faster. You
                can change the text and images and you're good to go.
              </p>
              {/*  List  */}
              <ul className='list-none mt-6'>
                <li className='py-2'>
                  <div className='flex items-center'>
                    <div>
                      <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                        {/* Icon */}
                        <i className='fas fa-fingerprint'></i>
                      </span>
                    </div>
                    <div>
                      <h4 className='text-gray-600'>Carefully crafted components</h4>
                    </div>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='flex items-center'>
                    <div>
                      <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                        {/* Icon */}
                        <i className='fab fa-html5'></i>
                      </span>
                    </div>
                    <div>
                      <h4 className='text-gray-600'>Amazing page examples</h4>
                    </div>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='flex items-center'>
                    <div>
                      <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                        {/* Icon */}
                        <i className='far fa-paper-plane'></i>
                      </span>
                    </div>
                    <div>
                      <h4 className='text-gray-600'>Dynamic components</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
