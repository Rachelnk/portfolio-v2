import { Link } from 'react-router-dom';


function Nav() {
  return (  
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
  )
 
  
}
export default Nav;