import AboutMe from "./AbouMe"
import PieChar from "./PieChar"
import RandomFacts from "./RandomFacts"
import MySkills from "./MySkills"

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
        <section>
            <MySkills />
        </section>
    </>
  )
}

export default AboutPage