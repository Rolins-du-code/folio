import Footer from "./assets/Footeur"
import About from "./Components/About"
import Experience from "./Components/Experiance"
import  Home  from "./Components/Home"
import Navbar from "./Components/Navbar"
import Projets from "./Components/Projets"



function App() {


  return (
    <div>

      <div className="p-5 md:px-[15%]">
          <Navbar />
          <Home />
      </div>

      <About />

      <div className="p-5 md:px-[15%]">
          <Experience />
          <Projets />
      </div>

          <Footer />
    </div>
  )
}

export default App
