import './Portfolio.css';
import fund from '../portfolio/fund.png';
import insta from '../portfolio/insta.png';
import github from '../icons/github.png';
import link from '../icons/link.png';
import hood from '../portfolio/hood1.png';
import awards from '../portfolio/projectawards.png';
import gallery from '../portfolio/gallery.png';
import pitch from '../portfolio/oneminute.png';
import newsapp from '../portfolio/newsapp.png';
import quotes from  '../portfolio/quotes.png';
import reposearch from '../portfolio/reposearch.png';
import delani from '../portfolio/delani.png'
// import pizza from '../portfolio.delani.png'
// import akan from '../portfolio/delani.png'



function Portfolio () {
  return(
    <>
    <h1 style={{textAlign: 'center'}}>PORTFOLIO</h1>
    
    <div className='row'>
      <div className='col-md-2'></div><div>
        <p>Here are some of the solo projects as well as those that I’ve collaborated on worked on. </p> 
        <button className="tech">ALL</button> <button className="tech">Angular</button>
        <button className="tech">React</button> <button className="tech">Django</button>
        <button className="tech">Flask</button> <button className="tech">HTML, CSS,<br></br> Javascript</button>
        <button className="tech">Full Stack</button> 
    </div>
    {/* links
    https://the-gram-connect.herokuapp.com/
    https://rachelnk.github.io/Fund-Flow/
    https://jirani-connect.herokuapp.com/
    https://tech-project-awards.herokuapp.com/
    https://kiaries-gallery.herokuapp.com/
    https://rachelnk.github.io/GithubRepoRetrieval/user-profile
    https://one-minutepitch.herokuapp.com/
    https://news-app-360.herokuapp.com/
    https://rachelnk.github.io/Quotes/
    https://rachelnk.github.io/Pizza-Application/
    https://rachelnk.github.io/DelaniStudio/
     */}
      <div className='col-md-8'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>Instagram Clone</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={insta} alt='insta-project' className='card-img-top image-resize'/>
                      <h5 className='languages'>HTML/CSS/JS/DJANGO</h5>
                      <button className='portfolio-more'>More</button>
                  </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/Instagram-Clone'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://the-gram-connect.herokuapp.com/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>Fund Flow- Automated Donation</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={fund} alt='fund-flow' className='card-img-top image-resize'/>
                      <h5 className='languages'>ANGULAR/DJANGO/</h5>
                      <button className='portfolio-more'>More</button>
                  </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/Fund-Flow'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://rachelnk.github.io/fund-flow'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'> NeighborhoodWatch - Jirani Connect</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={hood} alt='jiranin-connect' className='card-img-top image-resize'/>
                      <h5 className='languages'>HTML/CSS/JS/DJANGO</h5>
                      <button className='portfolio-more'>More</button>
                  </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/NeighborhoodWatch'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://jirani-connect.herokuapp.com/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>Tech Project Awards</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={awards} alt='tech-project-awards' className='card-img-top image-resize'/>
                      <h5 className='languages'>HTML/CSS/JS/DJANGO</h5>
                      <button className='portfolio-more'>More</button>
                  </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/ProjectAwards'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://tech-project-awards.herokuapp.com/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>Kiarie's Gallery</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={gallery} alt='insta-project' className='card-img-top image-resize'/>
                      <h5 className='languages'>HTML/CSS/JS/DJANGO</h5>
                      <button className='portfolio-more'>More</button>
                  </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/Kiaries-Gallery'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://kiaries-gallery.herokuapp.com/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>

          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>One Minute Pitch</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={pitch} alt='insta-project' className='card-img-top image-resize'/>
                      <h5 className='languages'>HTML/CSS/JS/FLASK</h5>
                      <button className='portfolio-more'>More</button>
                  </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/OneMinutePitch'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://one-minutepitch.herokuapp.com/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
         
          
        </div>
        

      </div>
      <div className='col-md-2'></div>
     

    </div>
     
    
    </>
  )
}
  
 
 export default Portfolio;
