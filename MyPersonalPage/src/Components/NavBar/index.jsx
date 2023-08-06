import './index.scss'
import Logo from '../../assets/logo-3.png'
import { useState } from 'react';

const NavBar = () => {
  const [theme, setTheme] = useState(false)

  function audi() {
    const audio = new Audio(Logo)
    audio.play()
    return setTheme(!theme)
  }

  return (
    <>
      <nav>
        <div className="container mx-auto px-56 py-3">
          <div className="left_nav">
            <div className='ml-3'>
                <img src={Logo} alt="" width={50}/>
            </div>
          </div>
          <div className="center_nav">
              <p>About</p>
              <p>Portfolio</p>
              <p>Contact</p>
              <p>Blog</p>
          </div>
          <div className="right_nav">
              <span>Instagram</span>
              <span>Telegram</span>            
              <span>GitHub</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
