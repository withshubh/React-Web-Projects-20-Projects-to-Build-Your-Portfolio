import React from 'react';

function TeamSection() {
  return (
    <section className='pt-20 pb-48'>
      {/* Section Container */}
      <div className='container mx-auto px-4'>
        {/* Text Box */}
        <div className='flex flex-wrap justify-center text-center mb-24'>
          <div className='w-full lg:w-6/12 px-4'>
            <h2 className='text-4xl font-semibold'>Here are our heroes</h2>
            <p className='text-lg leading-relaxed m-4 text-gray-600'>
              According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
              NSIDClead scentist, puts the potentially record maximum.
            </p>
          </div>
        </div>
        {/* Flex Row Container */}
        <div className='flex flex-wrap'>
          {/* Item */}
          <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4' data-aos='fade-in'>
            <div className='px-6'>
              {/* Image */}
              <img
                alt='...'
                src='https://randomuser.me/api/portraits/men/34.jpg'
                className='shadow-lg rounded-full max-w-full mx-auto'
                style={{ maxWidth: '120px' }}
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold'>Ryan Thompson</h5>
                <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>Web Developer</p>
                {/* Social Media Buttons */}
                <div className='mt-6'>
                  <button
                    className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-twitter'></i>
                  </button>
                  <button
                    className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-facebook-f'></i>
                  </button>
                  <button
                    className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-dribbble'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Item */}
          <div
            className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'
            data-aos='fade-in'
            data-aos-delay='400'>
            <div className='px-6'>
              {/* Image */}
              <img
                alt='...'
                src='https://randomuser.me/api/portraits/men/74.jpg'
                className='shadow-lg rounded-full max-w-full mx-auto'
                style={{ maxWidth: '120px' }}
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold'>Romina Hadid</h5>
                <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                  Marketing Specialist
                </p>
                {/* Social Media Buttons */}
                <div className='mt-6'>
                  <button
                    className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-google'></i>
                  </button>
                  <button
                    className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-facebook-f'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Item */}
          <div
            className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'
            data-aos='fade-in'
            data-aos-delay='600'>
            <div className='px-6'>
              {/* Image */}
              <img
                alt='...'
                src='https://randomuser.me/api/portraits/women/76.jpg'
                className='shadow-lg rounded-full max-w-full mx-auto'
                style={{ maxWidth: '120px' }}
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold'>Alexa Smith</h5>
                <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>UI/UX Designer</p>
                {/*  Social Media Buttons */}
                <div className='mt-6'>
                  <button
                    className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-google'></i>
                  </button>
                  <button
                    className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-twitter'></i>
                  </button>
                  <button
                    className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-instagram'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Item */}
          <div
            className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'
            data-aos='fade-in'
            data-aos-delay='800'>
            <div className='px-6'>
              {/* Image */}
              <img
                alt='...'
                src='https://randomuser.me/api/portraits/women/33.jpg'
                className='shadow-lg rounded-full max-w-full mx-auto'
                style={{ maxWidth: '120px' }}
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold'>Jenna Kardi</h5>
                <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                  Founder and CEO
                </p>
                {/* Social Media Buttons */}
                <div className='mt-6'>
                  <button
                    className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-dribbble'></i>
                  </button>
                  <button
                    className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-google'></i>
                  </button>
                  <button
                    className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-twitter'></i>
                  </button>
                  <button
                    className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'>
                    {/* Icon */}
                    <i className='fab fa-instagram'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
