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
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
          </div>
          <div className="right_nav">
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Telegram</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
