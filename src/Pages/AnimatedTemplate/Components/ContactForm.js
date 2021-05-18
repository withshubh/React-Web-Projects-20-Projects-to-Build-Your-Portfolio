import React from 'react';

function ContactForm() {
  return (
    <section className='relative block py-24 lg:pt-0 bg-gray-900'>
      {/* Container */}
      <div className='container mx-auto px-4' data-aos='fade-in'>
        <div className='flex flex-wrap justify-center lg:-mt-64 -mt-48'>
          <div className='w-full lg:w-6/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300'>
              <div className='flex-auto p-5 lg:p-10'>
                <h4 className='text-2xl font-semibold'>Want to work with us?</h4>
                <p className='leading-relaxed mt-1 mb-4 text-gray-600'>
                  Complete this form and we will get back to you in 24 hours.
                </p>
                {/* Name */}
                <div className='relative w-full mb-3 mt-8'>
                  <label
                    className='block uppercase text-gray-700 text-xs font-bold mb-2'
                    for='full-name'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                    placeholder='Full Name'
                    style={{ transition: 'all 0.15s ease 0s' }}
                  />
                </div>
                {/* Email */}
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-gray-700 text-xs font-bold mb-2'
                    for='email'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                    placeholder='Email'
                    style={{ transition: 'all 0.15s ease 0s' }}
                  />
                </div>
                {/* Message */}
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-gray-700 text-xs font-bold mb-2'
                    for='message'>
                    Message
                  </label>
                  <textarea
                    rows='4'
                    cols='80'
                    className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                    placeholder='Type a message...'></textarea>
                </div>
                <div className='text-center mt-6'>
                  <button
                    className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    style={{ transition: 'all 0.15s ease 0s' }}>
                    Send Message
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

export default ContactForm;
