import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Education from './Pages/Education';
import ContactMe from './Pages/Contact';
import github from './icons/github.png';
import linkedin from './icons/linkedin .png'
import resume from './portfolio/Resume.pdf'
import email from './icons/email.png'

function App() {
  return (
    <>
    {/* className='col-md-12 container' */}
   
     
     <nav className='navbar navbar-expand-lg navbar-dark sticky-top'>
        <div class="container-fluid">
          <a class="navbar-brand" href="#home"><span className='dev-name1'>Rachel.</span><span className='dev-name2'>nk</span> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            
                    <ul className='navbar-nav mx-auto >'> 
                    
                    <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a class="nav-link" href="#about">About</a></li>
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a class="nav-link" href="#education">Education</a></li>
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a class="nav-link" href="#portfolio">Portfolio</a></li>
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a class="nav-link" href="#contact">Contact</a></li>
                      <li className='nav-item' style={{fontSize: '30px', padding: '0 20px', paddingTop: '10px !important'}}><a class="nav-link" href={resume} target="_blank" style={{border:'1px solid #6cebeb', justifyContent: 'center'}} rel="noreferrer">Resume</a></li>
                      
                      
                    </ul>
                     
                 
                 
            </div>    
          </div>       
           
     </nav>
      
    
     <div className='container'>
        <div id='home'><Home /></div>
        <div id='about'> <About /> </div>   
        <div id='education'> <Education /> </div> 
        <div id='portfolio'> <Portfolio /> </div> 
        
        <div id="contact"><ContactMe /></div>
      </div>
      <div className='social-icons w3-animate-bottom'>
      <a href='https://www.linkedin.com/in/rachael-kiarie/' > <img src={linkedin} alt='' width='40' style={{marginBottom:'10px'}}/> </a>
        <a href='https://github.com/Rachelnk'><img src={github} alt='' width='40'style={{marginBottom:'10px'}}/> </a>
        <a href='mailto:rachelnk94@gmail.com'><img src={email} alt='' width='40'/></a>        
      </div>
     {/* </div> */}
     
    
    
    </>
    
  );
}

export default App;
