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
import delani from '../portfolio/delani.png';
import pizza from '../portfolio/pizzaApp.png';
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from 'react';

// import akan from '../portfolio/delani.png'



function Portfolio () {
  const [tabKey, initTabKey] = useState('fullstack')  
  
  return(
    <>
    <h1 style={{textAlign: 'center'}} className='heading w3-animate-left'>Portfolio</h1>
    
    <div className='row w3-animate-left'>
      <div className='col-md-12'> 
   
    <Tabs activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
        <Tab eventKey='fullstack' title='Full Stack'>
        <div className='row'>
        <div className='col-md-4' >
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>Fund Flow- Automated Donation</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={fund} alt='fund-flow' className='card-img-top image-resize'/>
                    <p className='project-details'>This is an automated donation's platform whereby donors can donate to a charity of their choice.</p>
                      <h5 className='languages'>angular | django</h5>
                  </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/Fund-Flow'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://rachelnk.github.io/fund-flow'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
        </div>
        </Tab>
        <Tab eventKey='django' title='Django' className='tabname'>
        <div className='row'>
        <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>The Gram Connect</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={insta} alt='insta-project' className='card-img-top image-resize'/>
                    <p className='project-details'>This application is an Instagram clone where users can share photos, comment and like other user's posts.</p>
                      <h5 className='languages'>html | css | js | django</h5>
                    </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/Instagram-Clone'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://the-gram-connect.herokuapp.com/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
          <div className='col-md-4 '>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'> NeighborhoodWatch - Jirani Connect</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={hood} alt='jirani-connect' className='card-img-top image-resize'/>
                    <p className='project-details'>With this application allows users to join a neighborhood, add posts about upcoming neighborhood events, security updates and power outage alerts. Users can also add businesses. They also have access to police and health department telephone number. </p>
                      <h5 className='languages'>html | css | js | django</h5>
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
                    <p className='project-details'>This platform allows users to upload their projects. Users can also rate the available projects based on content, design and usability.</p>
                      <h5 className='languages'>html | css | js | django</h5>
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
                      <p className='project-details'>This is a personal gallery whereby users can view uploaded images, search for pictures in certain categories i.e. art, food, travel. They can also view filter images by location. Users can share the images by copying the image link.</p>
                      <h5 className='languages'>html | css | js | django</h5>
                     
                   </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/Kiaries-Gallery'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://kiaries-gallery.herokuapp.com/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
        </div>

        </Tab>
        <Tab eventKey='flask' title='Flask'>
        <div className='row'>
        <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>One Minute Pitch</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={pitch} alt='insta-project' className='card-img-top image-resize'/>
                    <p className='project-details'>This is a web application that displays pitches in different categories i.e. business, job, advertisement, that have been made by users. Users comment on the pitches as well as upvote or downvote them only if they have an account and are logged in.</p>
                      <h5 className='languages'>html | css | js | flask</h5>
                  </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/OneMinutePitch'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://one-minutepitch.herokuapp.com/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>NewsApp</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={newsapp} alt='insta-project' className='card-img-top image-resize'/>
                    <p className='project-details'>This is a web application consumes the <b><a href='https://newsapi.org/'>newsapi.org </a></b> API and in turn displays different categories i.e. business, technology, of news sources e.g. CNN, Indpendent.</p>
                      <h5 className='languages'>html | css | js | flask</h5>
                   </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/NewsApp'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://news-app-360.herokuapp.com/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
        </div>


        </Tab>
        <Tab eventKey='angular' title='Angular'>
            <div className='row'>
            <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>Github Repo Search</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={reposearch} alt='insta-project' className='card-img-top image-resize'/>
                      <h5 className='languages'>html | css | angular</h5>
                      <p className='project-details'>This application enables users to search for GitHub repositories as well as Github users.</p>
                     </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/GithubRepoRetrieval'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://rachelnk.github.io/githubreporetrieval/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>Quotes Generator</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={quotes} alt='quotes' className='card-img-top image-resize'/>
                      <h5 className='languages'>html | css | angular</h5>
                      <p className='project-details'>This application provides an interface for users to create quotes and have those quotes upvoted or downvoted depending on whether they are inspirational or not by other users.</p>
                  </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/Quotes'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://rachelnk.github.io/quotes/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
            </div>
        </Tab>
        <Tab eventKey='react' title='React'>
          <div className='row'>

          </div>

        </Tab>
        <Tab eventKey='html' title='Html, Css & JS'>
            <div className='row'>
            <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>Kiarie's Pizza Joint</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={pizza} alt='pizza app' className='card-img-top image-resize'/>
                    <p className='project-details'>This is a pizza restaurant website whereby users can view the menu for the pizza flavors available, their prices and make orders.</p>
                      <h5 className='languages'>html | css | js | jquery</h5>
                    </div>
                  <div className='card-footer'>
                    <a href="https://github.com/Rachelnk/Pizza-Application"> <img src={github} alt="github" width={30}/> </a>
                    <a href="https://rachelnk.github.io/Pizza-Application/"> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='port-heading'>Delani Studio</h5>
              </div>
                <div className='card-body'>
                    
                    <img src={delani} alt='Delani-Studio' className='card-img-top image-resize'/>
                    <p className='project-details'>The website showcases Delani Studio's products and portfolio.</p>
                      <h5 className='languages'>html | css | js | jquery</h5>
                   </div>
                  <div className='card-footer'>
                    <a href='https://github.com/Rachelnk/DelaniStudio'> <img src={github} alt="github" width={30}/> </a>
                    <a href='https://rachelnk.github.io/DelaniStudio/'> <img src={link} alt="site link" width={30}/> </a>
                  
                  </div>

            </div>
          </div>
            </div>

        </Tab>
    </Tabs>      

      </div>   
     
    </div>
     
    
    </>
  )
  }

  
 
 export default Portfolio;
