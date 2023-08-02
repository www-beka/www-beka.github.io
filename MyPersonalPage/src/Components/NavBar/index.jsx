import './index.scss'
import Theme from '../Theme';
import { useState } from 'react'

const NavBar = () => {
  const [theme, setTheme] = useState(false)

  function changeTheme() {
    return setTheme(!theme)
  }

  return (
    <>
      <nav className={theme ? 'dark-theme' : 'light-theme'  }>
        <div className="container mx-auto px-40">
          <div className="left_nav">
            <div className='ml-3' onClick={changeTheme}>
              <Theme />
            </div>
          </div>
          <div className="right_nav">
              <p>Home</p>
              <p>Blog</p>
              <p>About</p>
              <p>Projects</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
