import NavBar from "../../NavBar"
import Footer from "../../Footer"
import MainSections from "./MainSections"
import LatesPost from "./LatesPost"

const HomePage = () => {
    return(
        <>
            <div className="HomePage">
                <section>
                    <NavBar />
                </section>
                <section>
                    <MainSections/>
                </section>
                <section>
                    <LatesPost />
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default HomePage