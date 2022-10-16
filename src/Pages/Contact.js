import './Contact.css'
import github from '../icons/github.png';
import linkedin from '../icons/linkedin .png';
import email from '../icons/email.png';

import { Bounce } from "react-awesome-reveal";

function ContactMe () {
    return (
      <Bounce triggerOnce="true">
    <div style={{marginTop: '40px'}}>
      <h1 style={{textAlign: 'center', fontFamily: 'Libre Caslon Text, serif', color: '#6cebeb', marginBottom: '30px'}} className='heading w3-animate-right'><span style={{color: '#6cebeb', fontSize: '25px'}}>05.</span> Get In Touch</h1>
    <div className='w3-animate-right'>
    <h3 className='contact-info'style={{fontSize: '20px', fontFamily: 'Libre Caslon Text, serif'}}>Glad you made it this far.</h3>
      <p className='contact-info' style={{fontSize: '25px', margin: '30px'}}>I do hope my portfolio up until this point was not a waste of your time. <br></br> Do consider me for future jobs and opportunities.</p>
     <div className='text-center' style={{paddingBottom: '25px'}}>
     <a  href='https://www.linkedin.com/in/rachael-kiarie/' > <img src={linkedin} alt='' width='40' style={{marginRight:'15px'}}/> </a>
        <a href='https://github.com/Rachelnk'><img src={github} alt='' width='40' style={{marginRight:'15px'}}/> </a>
        <a href='mailto:rachelnk94@gmail.com'><img src={email} alt='' width='40'/></a>
       
      
     </div>
     
      </div>
    </div>
    </Bounce>
  )
 }
 export default ContactMe;
