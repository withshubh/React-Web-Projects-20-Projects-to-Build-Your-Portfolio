import React from 'react';

function Footer() {
  return (
    <footer class='relative bg-gray-300 pt-8 pb-6'>
      {/*  Making Polygon Shape in Background  */}
      <div
        class='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
        style={{ height: '80px', transform: 'translateZ(0)' }}>
        <svg
          class='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'>
          <polygon class='text-gray-300 fill-current' points='2560 0 2560 100 0 100'></polygon>
        </svg>
      </div>
      {/* Section Container  */}
      <div class='container mx-auto px-4'>
        {/* Text Box Container */}
        <div class='flex flex-wrap'>
          <div class='w-full lg:w-6/12 px-4'>
            <h4 class='text-3xl font-semibold'>Let's keep in touch!</h4>
            <h5 class='text-lg mt-0 mb-2 text-gray-700'>
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            {/*  Social Buttons  */}
            <div class='mt-6'>
              <a href='https://www.twitter.com/creativetim' target='_blank'>
                <i class='fab fa-twitter  bg-white text-blue-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center'></i>
              </a>
              <a href='https://www.facebook.com/creativetim' target='_blank'>
                <i class='fab fa-facebook-square bg-white text-blue-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center'></i>
              </a>
              <a href='https://www.dribbble.com/creativetim' target='_blank'>
                <i class='fab fa-dribbble bg-white text-pink-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center'></i>
              </a>
              <a href='https://www.github.com/creativetimofficial' target='_blank'>
                <i class='fab fa-github bg-white text-gray-900 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center'></i>
              </a>
            </div>
          </div>
          {/*  List Container  */}
          <div class='w-full lg:w-6/12 px-4'>
            <div class='flex flex-wrap items-top mb-6'>
              {/*  List 1  */}
              <div class='w-full lg:w-4/12 px-4 ml-auto'>
                <span class='block uppercase text-gray-600 text-sm font-semibold mb-2'>
                  Useful Links
                </span>
                <ul class='list-unstyled'>
                  <li>
                    <a
                      class='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://www.creative-tim.com/presentation'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      class='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://blog.creative-tim.com'>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      class='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://www.github.com/creativetimofficial'>
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      class='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://www.creative-tim.com/bootstrap-themes/free'>
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              {/* List 2  */}
              <div class='w-full lg:w-4/12 px-4'>
                <span class='block uppercase text-gray-600 text-sm font-semibold mb-2'>
                  Other Resources
                </span>
                <ul class='list-unstyled'>
                  <li>
                    <a
                      class='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md'>
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      class='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://creative-tim.com/terms'>
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      class='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://creative-tim.com/privacy'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      class='text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm'
                      href='https://creative-tim.com/contact-us'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*  Line Break  */}
        <hr class='my-6 border-gray-400' />
        {/*  Footer Text */}
        <div class='flex flex-wrap items-center md:justify-between justify-center'>
          <div class='w-full md:w-4/12 px-4 mx-auto text-center'>
            <div class='text-sm text-gray-600 font-semibold py-1'>
              Copyright © 2019 Tailwind Starter Kit by
              <a href='https://www.creative-tim.com' class='text-gray-600 hover:text-gray-900'>
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
