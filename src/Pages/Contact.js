import './Contact.css'
import github from '../icons/github.png';
import linkedin from '../icons/linkedin .png'

import email from '../icons/email.png'
function ContactMe () {
  return (
    <div>
      <h1 style={{textAlign: 'center'}} className='heading w3-animate-right'>Contact</h1>
    <div className='w3-animate-right'>
    <h3 className='contact-info'style={{fontSize: '20px'}}>Glad you made it this far.</h3>
      <p className='contact-info' style={{fontSize: '25px', margin: '20px'}}>I do hope my portfolio up until this point was not a waste of your time. Do consider me for future jobs and opportunities.</p>
     <div className='text-center' style={{paddingBottom: '25px'}}>
     <a  href='https://www.linkedin.com/in/rachael-kiarie/' > <img src={linkedin} alt='' width='40' style={{marginRight:'15px'}}/> </a>
        <a href='https://github.com/Rachelnk'><img src={github} alt='' width='40' style={{marginRight:'15px'}}/> </a>
        <a href='mailto:rachelnk94@gmail.com'><img src={email} alt='' width='40'/></a>
       
      
     </div>
     
      </div>
    </div>
  )
 }
 export default ContactMe;
