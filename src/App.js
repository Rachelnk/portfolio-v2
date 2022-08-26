import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import ContactMe from './Pages/Contact';
// import Nav from './Navbar';
import Layout from "./components/layout/Layout.js"

function App() {
  return (
   
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactMe />} />
       
      </Routes>
      </Layout>
    </Router>
    
  );
}

export default App;
