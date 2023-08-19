import HomePage from "./Components/Pages/Home";
import Layout from "./Components/Layout/Layout";
import NoPage from "./Components/Layout/NoPage";
import AboutPage from "./Components/Pages/About";
import Portfolio from "./Components/Pages/Portfolio";
import Contact from "./Components/Pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

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
              <Route path="Contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
