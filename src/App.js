import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
     
     <nav className='navbar navbar-expand-sm navbar-dark sticky-top'>
        <div className='container-fluid'>
          <a class="navbar-brand" href="#home"><span className='dev-name1'>Rachel.</span><span className='dev-name2'>nk</span> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div className='nav-items'>
                    <ul className='navbar-nav '> 
                    
                    <li className='nav-item'><a class="nav-link" href="#about">About</a></li>
                      <li className='nav-item'><a class="nav-link" href="#education">Education</a></li>
                      <li className='nav-item'><a class="nav-link" href="#portfolio">Portfolio</a></li>
                      <li className='nav-item'><a class="nav-link" href="#contact">Contact</a></li>
                      
                      
                    </ul>
                     </div> 
                 
                 
            </div>
        
        </div>
           
     </nav>
      
     </div>
     <div className='container'>
     <div id='home'><Home /></div>
    <div id='about'> <About /> </div>   
    <div id='education'> <Education /> </div> 
    <div id='portfolio'> <Portfolio /> </div> 
    
    <div id="contact"><ContactMe /></div>

     </div>
    
    
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
