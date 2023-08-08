import './index.scss'

const AboutMe = () => {
  return (
    <>
      <div className="aboutMe">
        <div className="aboutMe_content container mx-auto px-52">
          <div className="aboutMe_top grid grid-cols-2">
            <div className="aboutMe_top_left">
              <h1>about.</h1>
              <p>I'm a full-stak developer in sunny Samarkand, Uzbekistan.</p>
              <span>
                Since 2021, I've enjoyed turning complex problems into simple,
                beautiful and intuitive designs. When I'm not pushing pixels,
                you'll find me cooking, gardening or working out in the park.
              </span>
            </div>
            <div className="aboutMe_top_right">
                <img src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/about-adham-dannaway.jpg" alt="" />
            </div>
          </div>
          <div className="aboutMe_bottom grid grid-cols-6 gap-5">
              <div className="items p-2 bg-gray-50"><img src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/toddler.jpg" alt="" /></div>
              <div className="items p-2 bg-gray-50"><img src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/sydney.jpg" alt="" /></div>
              <div className="items p-2 bg-gray-50"><img src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/home.jpg" alt="" /></div>
              <div className="items p-2 bg-gray-50"><img src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/workspace.jpg" alt="" /></div>
              <div className="items p-2 bg-gray-50"><img src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/l-sit-pullup.jpg" alt="" /></div>
              <div className="items p-2 bg-gray-50"><img src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/interior-design.jpg" alt="" /></div>
          </div>  
        </div>
      </div>
    </>
  );
};

export default AboutMe;
