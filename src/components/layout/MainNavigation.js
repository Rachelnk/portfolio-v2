import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';


function Nav() {
  return (  
    <header className=''>
    <div>
     
  <nav>
    <ul>
      <li><Link to= "/">Home</Link></li>
      <li><Link to="/about">About Me</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="contact">Contact Me</Link></li>
    </ul>     
  </nav>
   
  </div>
  </header>
  )
 
  
}
export default Nav;