import './index.scss'

const Portfolio_info = () => {
  return (
    <>
        <div className="Portfolio_info container mx-auto px-52">
            <div className="Portfolio_info_content grid grid-cols-2">
                <div className="Portfolio_content_left">
                    <h1>portfolio.</h1>
                    <p>Check out some of my latest UI/UX design case studies.</p>
                    <span>I've worked at start-ups, tech companies and corporates on a range of different projects, including design systems, websites and apps.</span>
                </div>
                <div className="Portfolio_content_right">
                    <img class="major preload" src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/adham-dannaway-design-portfolio.jpg" alt="adham dannaway design portfolio" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio_info