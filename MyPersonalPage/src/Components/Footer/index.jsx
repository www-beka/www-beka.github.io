import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
          <div className="footer_conten container mx-auto px-52 flex justify-between items-center">
            <div className="top">
              top
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
