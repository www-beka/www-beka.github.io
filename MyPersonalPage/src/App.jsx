import "./app.scss";
import Cursor from "./Components/cursor/Cursor";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import Services from "./Components/services/Services";
import Parallax from "./Components/parallax/Parallax";

function App() {
  return (
    <div className="app">
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
    </div>
  );
}

export default App;
