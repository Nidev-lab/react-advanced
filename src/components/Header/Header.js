import React from 'react';
import classNames from 'classnames';
import { useThemeContext, useThemeToggleContext } from '../../providers/ThemeProviders';

const Header = () => {
  const setTheme = useThemeToggleContext();
  const theme = useThemeContext();
  // const theme = useThemeContext();
  // console.log(theme);
  const handleChange = ({ target: { checked } }) => {
    const isChecked = checked;
    if (isChecked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <nav className={classNames('navbar navbar-light bg-light', {
      'bg-ligth': theme === 'light',
      'bg-dark': theme === 'dark',
    })}>

  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar</span>
  </div>
  <button className='btn-primary' onClick={() => setTheme('dark')}>Dark</button>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleChange}/>

</div>
</nav>
  );
};

export default Header;
