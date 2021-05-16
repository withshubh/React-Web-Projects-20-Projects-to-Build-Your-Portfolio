import './ToggleIcon.scss';

function ToggleIcon() {
  return (
    <div class='theme-switch-wrapper'>
      <span id='toggle-icon'>
        <span class='toggle-text'>Light Mode</span>
        <i class='fas fa-sun'></i>
      </span>
      <label class='theme-switch'>
        <input type='checkbox' id='toggle-dark-light-mode' />
        <div class='slider round'></div>
      </label>
    </div>
  );
}

export default ToggleIcon;
