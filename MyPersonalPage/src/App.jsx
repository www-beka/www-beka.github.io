import NavBar from "./Components/NavBar"
import MainSection from './Components/MainSections/index' 

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
      </div>
    </>
  )
}

export default App
