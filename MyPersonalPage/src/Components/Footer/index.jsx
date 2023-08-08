import "./footer.scss";
import Top from '../../assets/images/top.png'
const Footer = () => {
  return (
    <>
      <footer className="mt-14">
          <div className="footer_conten container mx-auto px-52 flex justify-between items-center">
            <div className="top">
              <img src={Top} alt="" />
            </div>
            <div className="right_footer">
                <span>© 2023 Behzod Bekmuratov</span>
            </div>
            <div className="left_footer">
                <span>About</span>
                <span>Portfolio</span>
                <span>Contact</span>
                <span>Blog</span>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
