function NavBar() {
  // Currently this class doesn't do anything, but it's a demonstration for how to toggle the class
  const toggleNavBarHandler = (e) => e.currentTarget.classList.toggle('example-collapse-navbar');

  return (
    <nav className='top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        {/* <!-- Nav Left Side --> */}
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a
            className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'
            href='#'>
            {/* <!-- Nav Title --> */}
            Animated Template
          </a>
          {/* Hamburger Menu (Mobile)  */}
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={toggleNavBarHandler}>
            {/* Icon */}
            <i className='text-white fas fa-bars'></i>
          </button>
        </div>
        {/* Nav Right Side */}
        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
          {/* Social Media Button */}
          <li className='flex items-center'>
            <a
              className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
              href='#pablo'>
              {/* Icon */}
              <i className='lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg '></i>
              <span className='lg:hidden inline-block ml-2'>Share</span>
            </a>
          </li>
          {/* Social Media Button */}
          <li className='flex items-center'>
            <a
              className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
              href='#pablo'>
              {/* Icon */}
              <i className='lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg '></i>
              <span className='lg:hidden inline-block ml-2'>Tweet</span>
            </a>
          </li>
          {/* Social Media Button */}
          <li className='flex items-center'>
            <a
              className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
              href='#pablo'>
              {/* Icon */}
              <i className='lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg '></i>
              <span className='lg:hidden inline-block ml-2'>Star</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
