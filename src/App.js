import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
import ProjectDetail from './components/ProjectDetail';

function App() {
  console.log('App component is rendering');
  
  // For local dev, try to detect if we're on /portfolio-website path
  const basename = window.location.pathname.includes('/portfolio-website') ? '/portfolio-website' : '';
  
  return (
    <Router basename={basename}>
      <Routes>
        {/* Main Portfolio Page */}
        <Route path="/" element={
          <div>
            <Navbar />
            <Home />
            <About />
            <Experience />
            <Skills />
            <Works />
            <Contact />
          </div>
        } />
        
        {/* Project Detail Pages */}
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
