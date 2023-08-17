import "./works.scss";
import "../../../Mobile/WorksMobile.scss"

const LatesWorks = () => {
  return (
    <>
      <div className="latesWorks">
          <div className="latesWorks_content container mx-auto px-8 sm:px-52">
            <div className="latesWorks_head" >
                <div className="line"></div>
                <span>SOME OF MY LATEST WORK</span>
                <div className="line"></div>
            </div>
            <div className="latesWorks_main grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3  ">
                <div className="latesWorks_items">
                    <img className="w-full" src="https://www.adhamdannaway.com/wp-content/uploads/2022/12/feature-ui-design-book.jpg" alt="" />
                    <div className="desk">
                      <p>My UI desing Book</p>
                      <span>book</span>
                    </div>
                </div>
                <div className="latesWorks_items">
                    <img className="w-full" src="https://www.adhamdannaway.com/wp-content/uploads/2020/08/feature-william-hill-design-system.jpg" alt="" />
                    <div className="desk">
                      <p>My UI desing Book</p>
                      <span>book</span>
                    </div>
                </div>
                <div className="latesWorks_items hidden sm:block">
                    <img className="w-full" src="https://www.adhamdannaway.com/wp-content/uploads/2022/12/feature-ui-design-book.jpg" alt="" />
                    <div className="desk">
                      <p>My UI desing Book</p>
                      <span>book</span>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default LatesWorks;
