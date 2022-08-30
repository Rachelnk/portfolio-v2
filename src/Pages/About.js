import './About.css';
import avatar from '../icons/user.png';
function About () {
  return (
    <>
    <div className='row'>
      
      <h1 style={{paddingBottom: '20px'}}>About Me</h1>
      <div className='col-md-6'>
     
      <div>
   <p style={{fontSize: '30px'}}>
    I’m a Kenyan based <br></br> 
    fullstack software  
developer with a passion <br></br> for
creating clean, dynamic <br></br>  and responsive 
user experiences as well <br></br>  as build and maintain <br></br> 
well-documented
APIs.  
    </p>

   </div>
   
      </div>
      <div className='col-md-6'>
      <div>
        <img src={avatar} alt='avatar' width={250}  />
    {/* <button className="tech">HTML</button> <button className="tech">CSS</button>
    <button className="tech">Javascript</button> <button className="tech">Angular</button>
    <button className="tech">React</button> <button className="tech">Python</button>
    <button className="tech">Python</button> <button className="tech">Django</button>
    <button className="tech">Django REST Framework</button> <button className="tech">Flask</button>
    <button className="tech">SQLAlchemy</button><button className="tech">PostgreSQL</button> */}
    {/* <button className="tech"></button><button className="tech"></button> */}
   </div>
      </div>
    </div>

    
   
    
    </>
  )

 }
 export default About;
