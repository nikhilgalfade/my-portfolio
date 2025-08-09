import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutFullPage from "./pages/AboutFullPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-b from-purple-500 via-purple-800 to-black min-h-screen">
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* Full About Page */}
        <Route path="/about" element={<AboutFullPage />} />
      </Routes>
    </Router>
  );
}

export default App;
