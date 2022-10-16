import './Home.css';
import '../index.css'

import { Slide } from "react-awesome-reveal";

function Home () { 
return (
  

  <>

  <div className='row'>
    
    <div className='intro' >
    <div className="col-md-12" style={{paddingBottom: '40px'}}>
<Slide triggerOnce='true' direction='right'>
<h1 className='greetings' style={{fontSize: '20px', marginTop:'110px', fontFamily: 'Libre Caslon Text, serif'}}> Hi, my name is,</h1>
</Slide>

<Slide triggerOnce='true' direction='left'>
<p style={{fontSize:'60px', color:'#6cebeb', }} className='typed-item'>Rachel Kiarie.</p>
<p style={{fontSize:'60px', color:'#6cebeb', marginBottom:'20px'}} className='typed-item'>
A Fullstack Software Developer. </p>
</Slide>
<Slide triggerOnce='true' direction='right'>
<p style={{fontSize: '30px'}}>Specializing in both<br></br>
 <b>front-end and back-end</b> software development.</p>
 </Slide>
</div>

    </div>
   

  </div>
  
  </>
  
)
 }

 export default Home;
