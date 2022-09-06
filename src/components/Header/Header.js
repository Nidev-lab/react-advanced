import classNames from 'classnames';
import React from 'react';

const Header = ({ theme, setTheme }) => {
  const handleChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <nav
      className={classNames('navbar navbar-light', {
        'bg-light': theme === 'light',
        'bg-dark': theme === 'dark',
      })}
      data-testid="header-test"
    >
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
      </div>
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
