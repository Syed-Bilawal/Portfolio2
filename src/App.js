
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Navbar from "./components/navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Skills />
              <Work />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
