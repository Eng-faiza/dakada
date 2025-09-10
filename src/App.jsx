import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Team from "./pages/Team"
import Players from "./pages/Players"
import News from "./pages/News"
import Shop from "./pages/Shop"
import Seasons from "./pages/Seasons"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="min-h-screen ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/players" element={<Players />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/seasons" element={<Seasons />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
