import './index.scss'

const RandomFacts = () => {
  return (
    <>
        <div className="RandomFacts">
            <div className="RandomFacts_content container mx-auto px-52">
                <div>
                    <img src="https://www.adhamdannaway.com/wp-content/themes/dannaway/images/yoda.jpg" alt="" />
                </div>
                <div className='pl-24'>
                    <h2>Random facts</h2>
                    <ul>
                        <li>I drink a lot of tea</li>
                        <li>I'm into interior design</li>
                        <li>Gardening is my zen time</li>
                        <li>I love to cook (and eat)</li>
                        <li>I'm a bit of a clean freak</li>
                        <li>I want to live on Pandora</li>
                        <li>I'm slightly addicted to Twitter</li>
                        <li>Yoda is my mentor</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default RandomFacts