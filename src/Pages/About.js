import './About.css';
// import avatar from '../icons/user.png';
import kiarie from '../portfolio/dev.png';
import { Bounce } from "react-awesome-reveal";
function About () {
  return (
    <>
    <Bounce triggerOnce='true'>
    <div className='row' style={{marginTop: '100px'}}>
      
      <h1 className='heading' style={{paddingBottom:'20px', textAlign:'center', fontFamily: 'Libre Caslon Text, serif', color: '#6cebeb'}}><span style={{color: '#6cebeb', fontSize: '25px'}}>01.</span> About Me</h1>
      <div className='col-md-6'>
     
      <div>
        <p style={{fontSize: '30px', display: 'block'}}>    
      I’m a Kenyan based Full Stack Developer with a passion for
      creating clean, dynamic and responsive 
      user experiences as well as build and maintain <br></br> 
      well-documented
      APIs. 
          </p>

   </div>
   
      </div>
      <div className='col-md-6'>
      <div className=''>
        <img src={kiarie} alt='avatar' width={300} style={{boxShadow: '10px 10px #6cebeb'}}  />
    </div>
      </div>
    </div>
    </Bounce>     
    </>
  )
 }
 export default About;
