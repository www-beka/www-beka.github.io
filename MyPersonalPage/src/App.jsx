import './app.scss'
import Cursor from './Components/cursor/Cursor'
import Navbar from './Components/navbar/Navbar';
function App() {
  return (
    <>
      <div className="app">
        <Cursor />
        <section>
          <Navbar />
        </section>
        
      </div>
    </>
  );
}

export default App; 
