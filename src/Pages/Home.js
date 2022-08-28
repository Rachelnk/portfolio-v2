import './Home.css';
function Home () {
return (
  <>
  <div className='row'>
    <div className='col-md-2' ></div>
    <div className='col-md-8' >
    <div className="intro">

<h1 className='greetings'>Hi, there.</h1>
<p className=''>I'm <span className='name-stack'>Rachael, <br></br>
a fullstack software engineer <br></br> </span> 
specialized in<br></br>
both front-end and back-end <br></br>
software development.</p>
</div>
<div>
<button className='home-btn'>  My Portfolio</button> <button className='home-btn'>Contact Me</button>
</div>
    </div>
    <div className='col-md-2' ></div>

  </div>
  
  </>
  
)
 }
 export default Home;
