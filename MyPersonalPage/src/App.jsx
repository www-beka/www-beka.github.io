import HomePage from "./Components/Pages/Home"
import Layout from './Components/Layout'
import AboutPage from "./Components/Pages/About"
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
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}



export default App
