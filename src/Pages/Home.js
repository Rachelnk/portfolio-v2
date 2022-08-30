import './Home.css';
function Home () {
return (
  <>
  <div className='row'>
    <div className='col-md-2' ></div>
    <div className='col-md-8' >
    <div className="intro">

<h1 className='greetings' style={{fontSize: '20px', paddingTop:'30px'}}> Hi, my name is,</h1>
<p style={{fontSize: '40px'}} className=''><span style={{color: '#6cebeb', paddingTop:'40px'}}>Rachel Kiarie. </span> <br></br>
<span style={{color: '#6cebeb', paddingTop:'30px', paddingBottom:'100px'}}> A Fullstack Software Developer. <br></br> </span> 
Specializing in both<br></br>
 <b>front-end and back-end</b> software development.</p>
</div>
<div style={{paddingBottom: '40px'}}>
<button className='home-btn'>  My Portfolio</button> <button className='home-btn'>Contact Me</button>
</div>
    </div>
    <div className='col-md-2' ></div>

  </div>
  
  </>
  
)
 }
 export default Home;
