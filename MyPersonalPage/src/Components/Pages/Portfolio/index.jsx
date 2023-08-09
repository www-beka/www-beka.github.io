import Portfolio_info from "./Portfolio_Info";
import Projects from "./Porojects";

const Portfolio = () => {
  return (
    <div className="Portfolio container mx-auto px-52">
        <section>
            <Portfolio_info />
        </section>
        <section>
            <Projects />
        </section>
    </div>
  )
}

export default Portfolio