import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Education from './Pages/Education';
import ContactMe from './Pages/Contact';
// import Nav from './Navbar';
// import Layout from "./components/layout/Layout.js"

function App() {
  return (
    <>
    <div>
     
     <nav>
       <ul>
         <li><a href="#contact">Contact</a></li>
       </ul>     
     </nav>
      
     </div>
    <Home />
    <About />
    <Education />
    <Portfolio />
    <div id="contact"><ContactMe /></div>
    
    </>
    

   
    // <Router>
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/portfolio" element={<Portfolio />} />
    //     <Route path="/resume" element={<Resume />} />
    //     <Route path="/contact" element={<ContactMe />} />
       
    //   </Routes>
     
    // </Router>
    
  );
}

export default App;
