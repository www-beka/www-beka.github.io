import NavBar from "./Components/NavBar"
import MainSection from './Components/MainSections/index' 
import LatesPost from "./Components/LatesPost"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <div className="app">
        <section>
          <NavBar />
        </section>
        <section>
          <MainSection />
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

export default App
