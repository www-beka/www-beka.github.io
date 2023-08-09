import HomePage from "./Components/Pages/Home"
import Layout from './Components/Layout/Layout'
import NoPage from './Components/Layout/NoPage'
import AboutPage from "./Components/Pages/About"
import Portfolio from './Components/Pages/Portfolio'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <div className="app">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="About" element={<AboutPage />} />
              <Route path="Portfolio" element={<Portfolio />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}



export default App
