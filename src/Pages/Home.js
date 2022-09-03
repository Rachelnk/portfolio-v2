import './Home.css';

function Home () { 
return (
  

  <>
  <div className='row'>
    
    <div className='intro w3-container w3-animate-bottom' >
    <div className="col-md-12" style={{paddingBottom: '40px'}}>

<h1 className='greetings' style={{fontSize: '20px', marginTop:'110px'}}> Hi, my name is,</h1>

<p style={{fontSize:'60px', color:'#6cebeb', }} className='typed-item'>Rachel Kiarie.</p>
<p style={{fontSize:'60px', color:'#6cebeb', marginBottom:'20px'}} className='typed-item'>
A Fullstack Software Developer. </p>

{/* <div className='typed-item' style={{}}>
<Typewriter onInit={(typewriter)=> {
  typewriter
  .typeString("Rachel Kiarie.")  
  .start()
}}/>
<Typewriter onInit={(typewriter)=> {
  typewriter
  .typeString("A Fullstack Software Developer.")
  .start()
  delay: 500,
  
} }  />
</div> */}

<p style={{fontSize: '30px'}}>Specializing in both<br></br>
 <b>front-end and back-end</b> software development.</p>
</div>
{/* <div className='btn-section' style={{paddingBottom: '40px'}}>
  <button className='home-btn'>My Portfolio</button> <button className='home-btn'>Contact Me</button>

</div> */}
    </div>
   

  </div>
  
  </>
  
)
 }
 export default Home;
