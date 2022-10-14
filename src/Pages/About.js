import './About.css';
// import avatar from '../icons/user.png';
import kiarie from '../portfolio/kiarie.png'
function About () {
  return (
    <>
    <div className='row' style={{marginTop: '100px'}}>
      
      <h1 className='heading w3-animate-left' style={{paddingBottom:'20px', textAlign:'left', fontFamily: 'Libre Caslon Text, serif'}}><span style={{color: '#6cebeb', fontSize: '25px'}}>01.</span> About Me</h1>
      <div className='col-md-6'>
     
      <div>
        <p style={{fontSize: '30px', display: 'block'}} className='w3-animate-left'>    
      I’m a Kenyan based Full Stack Developer with a passion for
      creating clean, dynamic and responsive 
      user experiences as well as build and maintain <br></br> 
      well-documented
      APIs. 
          </p>

   </div>
   
      </div>
      <div className='col-md-6'>
      <div className='w3-animate-right'>
        <img src={kiarie} alt='avatar' width={300}  />
    </div>
      </div>
    </div>

    
   
    
    </>
  )

 }
 export default About;
