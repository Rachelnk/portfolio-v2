import './Portfolio.css'
function Portfolio () {
  return(
    <>
    <h1>PORTFOLIO</h1>
    <div>
    <p>Here are some of the solo projects as well as those that I’ve collaborated on worked on. </p> 
    <button className="tech">ALL</button> <button className="tech">Angular</button>
    <button className="tech">React</button> <button className="tech">Django</button>
    <button className="tech">Flask</button> <button className="tech">HTML, CSS,<br></br> Javascript</button>
    <button className="tech">Full Stack</button> 
    </div>
    <div className='row'>
      <div className='col-md-4'>
        
        <div className='card'>
          <div className='card-header'>
            <h5 className=''>Instagram Clone</h5>
          </div>
            <div className='card-body'>
                
                <img src='https://unsplash.com/photos/7_K8r355ZO0' alt=''/>
                  <h5 className=''>HTML/DJANGO</h5>
                  <button className='portfolio-more'>More</button>
              </div>
              <div className='card-footer'>
                <a href='https://github.com/'> <img src='https://www.flaticon.com/free-icon/github_1051326' alt=""/> </a>
              </div>

        </div>

      </div>

    </div>
     
    
    </>
  )
}
  
 
 export default Portfolio;
