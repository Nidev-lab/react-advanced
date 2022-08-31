import classNames from 'classnames';
import React from 'react';
import {
  useThemeContext,
  useThemeToggleContext,
} from '../../providers/ThemeProvider';

const Header = () => {
  const setTheme = useThemeToggleContext();
  const theme = useThemeContext();

  const handleChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <nav
      data-testid="navTestId"
      className={classNames('navbar navbar-light', {
        'bg-light': theme === 'light',
        'bg-dark': theme === 'dark',
      })}
    >
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
      </div>
      <button className="btn-primary" onClick={() => setTheme('dark')}>
        Dark
      </button>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={handleChange}
        />
      </div>
    </nav>
  );
};

export default Header;
