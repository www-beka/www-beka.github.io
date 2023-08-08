import NavBar from "../../NavBar"
import Footer from "../../Footer"
import MainSections from "./MainSections"
import LatesWorks from "./LatesWorks"

const HomePage = () => {
    return(
        <>
            <div className="HomePage">
                <section>
                    <MainSections/>
                </section>
                <section>
                    <LatesWorks />
                </section>
            </div>
        </>
    )
}

export default HomePage