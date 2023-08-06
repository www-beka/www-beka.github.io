import HomePage from "./Components/Pages/Home"
import Layout from './Components/Layout'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <div className="app">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}



export default App
