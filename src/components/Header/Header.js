import React from 'react';
import { useThemeToogleContext, useThemeContext } from '../../providers/ThemeProvider';

const Header = () => {
  const setTheme = useThemeToogleContext();
  const theme = useThemeContext();
  const handleChange = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
   <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar</span>
  </div>
  <button className='btn-primary' onClick={() => setTheme('Dark')}>Dark</button>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleChange}/>
</div>
</nav>
  );
};

export default Header;
