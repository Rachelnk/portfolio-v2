import './About.css';
// import avatar from '../icons/user.png';
import kiarie from '../portfolio/kiarie.png'
function About () {
  return (
    <>
    <div className='row'>
      
      <h1 className='heading' style={{paddingBottom:'20px', textAlign:'center'}}>About Me</h1>
      <div className='col-md-6'>
     
      <div>
   <p style={{fontSize: '30px', display: 'block'}}>    
I’m a Kenyan based fullstack software  
developer with a passion for
creating clean, dynamic and responsive 
user experiences as well as build and maintain <br></br> 
well-documented
APIs. 
    </p>

   </div>
   
      </div>
      <div className='col-md-6'>
      <div className=''>
        <img src={kiarie} alt='avatar' width={300}  />
    </div>
      </div>
    </div>

    
   
    
    </>
  )

 }
 export default About;
