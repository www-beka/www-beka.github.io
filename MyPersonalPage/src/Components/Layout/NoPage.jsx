import './NoPage.scss'
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <>
      <div className="html">
        <div className="body">
          <div class="glitch-wrapper">
            <div class="glitch-text">ERROR 404: Not found</div>
          </div>
          <center>
            <button type="button"><Link to='/'>Homepage</Link></button>
          </center>

        </div>
      </div>
    </>
  );
};

export default NoPage;
