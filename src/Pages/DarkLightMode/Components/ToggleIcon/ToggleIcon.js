import './ToggleIcon.scss';

function ToggleIcon({ switchThemeHandler, isDarkMode, ...darkModeObject }) {
  const {
    textContent: { darkMode, lightMode },
    className: { sun, moon },
  } = darkModeObject;

  return (
    <div className='theme-switch-wrapper'>
      <span id='toggle-icon'>
        <span className='toggle-text'>{isDarkMode ? darkMode : lightMode}</span>
        <i className={isDarkMode ? moon : sun}></i>
      </span>
      <label className='theme-switch'>
        <input type='checkbox' onClick={switchThemeHandler} />
        <div className='slider round'></div>
      </label>
    </div>
  );
}

export default ToggleIcon;
