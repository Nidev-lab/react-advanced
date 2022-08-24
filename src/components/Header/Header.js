<<<<<<< HEAD
import React from 'react';
import classNames from 'classnames';
import { useThemeContext, useThemeToggleContext } from '../../providers/ThemeProviders';
=======
import classNames from 'classnames';
import React from 'react';
import { useThemeContext, useThemeToggleContext } from '../../providers/ThemeProvider';
>>>>>>> 1e4ba4f0a622c2c2c828bdf56cc81cb4e1c9138c

const Header = () => {
  const setTheme = useThemeToggleContext();
  const theme = useThemeContext();
<<<<<<< HEAD
  // const theme = useThemeContext();
  // console.log(theme);
  const handleChange = ({ target: { checked } }) => {
    const isChecked = checked;
    if (isChecked) {
=======

  const handleChange = () => {
    if (theme === 'light') {
>>>>>>> 1e4ba4f0a622c2c2c828bdf56cc81cb4e1c9138c
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
<<<<<<< HEAD
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
=======
    <nav className={classNames('navbar navbar-light', {
      'bg-light': theme === 'light',
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
>>>>>>> 1e4ba4f0a622c2c2c828bdf56cc81cb4e1c9138c
  );
};

export default Header;
