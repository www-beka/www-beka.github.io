import './app.scss'
import Cursor from './Components/cursor/Cursor'
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/hero/Hero';


function App() {
  return (
      <div className="app">
        <Cursor />
        <section id='Homepage'>
          <Navbar />
          <Hero />
        </section>
        
        
      </div>
  );
}

export default App; 
