import HomePage from "./Components/Pages/Home"
import Layout from './Components/Layout'

function App() {
  return (
    <>
      <div className="app">
        <HomePage />
          {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  )
}

export default App
