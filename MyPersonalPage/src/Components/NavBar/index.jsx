import './index.scss'
import Logo from '../../assets/images/logo-3.png'
import { useState } from 'react';
import Instagram_logo from '../../assets/images/instagram.svg'
import telegram_logo from '../../assets/images/telegram.svg'
import gitHub_logo from '../../assets/images/github.svg'
import { Link } from 'react-router-dom';

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
              <Link to='/'>
                <img src={Logo} alt="" width={50}/>
              </Link>
            </div>
          </div>
          <div className="center_nav">
              <ul>
                <li><Link to='/About'>About</Link> </li>
                <li><Link to='/Portfolio'>Portfolio</Link></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
          </div>
          <div className="right_nav">
              <ul> 
                <li><a href="#"><img src={Instagram_logo} width={30} alt="" /></a></li>
                <li><a href="#"><img src={telegram_logo} width={30} alt="" /></a></li>
                <li><a href="#"><img src={gitHub_logo} width={30} alt="" /></a></li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
