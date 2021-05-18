import { useState, useEffect } from 'react';

function useScript(src) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? 'loading' : 'idle');
  useEffect(
    () => {
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!src) {
        setStatus('idle');
        return;
      }
      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let script = document.querySelector(`script[src="${src}"]`);

      if (!script) {
        // Create script
        script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.setAttribute('data-status', 'loading');
        // Add script to document body
        document.head.appendChild(script);
        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event) => {
          script.setAttribute('data-status', event.type === 'load' ? 'ready' : 'error');
        };
        script.addEventListener('load', setAttributeFromEvent);
        script.addEventListener('error', setAttributeFromEvent);
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute('data-status'));
      }
      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event) => {
        setStatus(event.type === 'load' ? 'ready' : 'error');
      };
      // Add event listeners
      script.addEventListener('load', setStateFromEvent);
      script.addEventListener('error', setStateFromEvent);
      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener('load', setStateFromEvent);
          script.removeEventListener('error', setStateFromEvent);
        }
      };
    },
    [src] // Only re-run effect if script src changes
  );
  return status;
}

function useCSSLink(src) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? 'loading' : 'idle');
  useEffect(
    () => {
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!src) {
        setStatus('idle');
        return;
      }
      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let link = document.querySelector(`link[src="${src}"]`);

      if (!link) {
        // Create link
        link = document.createElement('link');
        link.setAttribute('src', src);
        link.rel = 'stylesheet';
        link.setAttribute('data-status', 'loading');
        // Add link to document body
        document.head.appendChild(link);
        // Store status in attribute on link
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event) => {
          link.setAttribute('data-status', event.type === 'load' ? 'ready' : 'error');
        };
        link.addEventListener('load', setAttributeFromEvent);
        link.addEventListener('error', setAttributeFromEvent);
      } else {
        // Grab existing link status from attribute and set to state.
        setStatus(link.getAttribute('data-status'));
      }
      // link event handler to update status in state
      // Note: Even if the link already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event) => {
        setStatus(event.type === 'load' ? 'ready' : 'error');
      };
      // Add event listeners
      link.addEventListener('load', setStateFromEvent);
      link.addEventListener('error', setStateFromEvent);

      // Remove event listeners on cleanup
      return () => {
        if (link) {
          link.removeEventListener('load', setStateFromEvent);
          link.removeEventListener('error', setStateFromEvent);
        }
      };
    },
    [src] // Only re-run effect if script src changes
  );
  return status;
}

export { useScript, useCSSLink };
