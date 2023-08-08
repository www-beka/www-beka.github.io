import AboutMe from "./AbouMe"
import PieChar from "./PieChar"
import RandomFacts from "./RandomFacts"

const AboutPage = () => {
  return (
    <>  
        <section>
            <AboutMe />
        </section>
        <section>
            <PieChar/>
        </section>
        <section>
            <RandomFacts />
        </section>
    </>
  )
}

export default AboutPage