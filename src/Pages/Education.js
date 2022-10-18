import './Education.css';
import { Tab, Row, Col, Nav, } from 'react-bootstrap';
import { Slide } from "react-awesome-reveal";

function Education(){
  return(
    <>  
    
     <div className='row' style={{marginTop: '80px'}}>
      <Slide triggerOnce='true' direction='right'>
     <h1 className='heading' style={{textAlign: "center", paddingBottom: '10px', paddingTop: '10px', fontFamily: 'Libre Caslon Text, serif', color: '#6cebeb'}}><span style={{color: '#6cebeb', fontSize: '25px'}}>02. </span>Experience and Education</h1>
     </Slide>
     <Slide triggerOnce='true' direction='left'>
     <div style={{marginTop: '20px'}}>
     <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
      <Row>
        <Col sm={3}>
          <Nav variant="tabs" className="flex-column" >
            <Nav.Item>
              <Nav.Link eventKey="first" className="nav-company" >Freelance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="nav-company">Andela Kenya</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="nav-company">International Medical Treatment</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className="nav-company">Mambo Software</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth" className="nav-company">KPLC</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <div className="tab-pane fade show active" id="v-pills-freelance" role="tabpanel" aria-labelledby="v-pills-freelance-tab">
         <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}> Freelance Developer</h3>
          <button className='edu-btn'>March 2019 - Present</button> <br></br>      
           <p>As a freelancer I've been working on solo projects as well as collaborating with others in teams in deadline-driven environments:
          </p>
          <p><i className='arrow-right'></i> Designing responsive user interfaces. </p>
          <p><i className='arrow-right'></i> Developing dynamic and scalable web applcations. </p>
          <p><i className='arrow-right'></i> Building APIs.</p>
          
        </div>
            </Tab.Pane>

            <Tab.Pane eventKey="second">

            <div >
        
              
          <h2 style={{fontFamily: 'Libre Caslon Text, serif'}}>Software Development trainee @ <a style={{textDecoration: 'none'}} href='https://andela.com/'><span style={{color:'#6cebeb'}}>Andela Kenya</span> </a></h2> <br></br>
          <button className='edu-btn'>Feb 2019 - March 2019</button> <br></br>      
           <p>As a trainee I was part of the boot camp to gain an employment opportunity at Andela .
Unfortunately, I did not make it through the end of the boot camp, however I gained skills in: </p>
<p> <i className='arrow-right'></i> Developing APIs in Python. </p>
<p> <i className='arrow-right'></i> Collaboration and version control using Github and Git.</p>
<p> <i className='arrow-right'></i> Project management and planning with Pivotal Tracker.</p>
        </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">

        <div className="">
       
           
          <h2 style={{fontFamily: 'Libre Caslon Text, serif'}}>Web Developer @ <a style={{textDecoration: 'none'}} href='https://www.intmedicaltreatment.com/'><span style={{color: '#6cebeb'}}>International Medical Treatment </span></a></h2> 
          <button className='edu-btn'>November 2018 — Feb 2019</button> <br></br>      
           <p>
           I worked on the company's websites <a style={{textDecoration: 'none'}} href= "https://www.intmedicaltreatment.com/">International Medical Treatment </a>and <a style={{textDecoration: 'none'}} href= 'myhealthafrica.com/'>My Health Africa</a> <p><i className='arrow-right'></i> Adding new pages on diseases, signs and symptoms. </p>
           <p><i className='arrow-right'></i> Adding functionalities such as Doctor SignUp forms, Search Function etc. </p> 
           <p><i className='arrow-right'></i> Troubleshooting and fixing bugs </p>
           </p>
          
        </div> 
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
            <div>      

          <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}>Junior Software Developer @ <span style={{color: '#6cebeb'}}>Mambo Software</span></h3>
           <button className='edu-btn'>October 2017 — October 2018</button> <br></br>      
           <p>
           I worked in a team developing desktop applications in VB.net, using Visual Studio 2010,
2017. Applications we developed include: </p>
<p><i className='arrow-right'></i> ERPs (enterprise resource planning system) </p>
<p><i className='arrow-right'></i> Hospital Management System </p>
<p><i className='arrow-right'></i> School Management System </p>
<p><i className='arrow-right'></i> POS (Point Of Sale systems) </p>
<p><i className='arrow-right'></i> CRMs (Customer Relationship Management system) </p>
<p><i className='arrow-right'></i> Sacco systems for managing loans.</p>
              
        </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
            <div >
        <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}> </h3>

          <h2 style={{fontFamily: 'Libre Caslon Text, serif'}}>Intern, IT Support @ <a style={{textDecoration: 'none'}} href='http://www.kplc.co.ke/'><span style={{color: '#6cebeb'}}>Kenya Power and Lighting Company</span></a></h2> 
          <button className='edu-btn'>May 2016 - July 2016</button> <br></br>      
           <p>As an intern I did the following:</p>
            <p><i className='arrow-right'></i> Installation, configuration of software as well as troubleshooting, Printer
installation and connection.</p>
             <p><i className='arrow-right'></i> Migration of PC/Laptop to different domain . </p> 
             <p><i className='arrow-right'></i> Installation of operating system. </p> 
             <p><i className='arrow-right'></i> Data Networking and
telecommunication (switch and router configuration, LAN, WAN, Trunking ,
Crimping) </p>        
                                     
        </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>   
    </div>         
    </Slide>
    </div>
    <Slide triggerOnce='true' direction='right'>
    <div className='row' style={{marginTop: '80px' ,marginBottom:'40px'}}>
     <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className="nav-company">Moringa School</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="nav-company">JKUAT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="nav-company">Online Certificates</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <div className=''>
              <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}>CERTIFICATE - Full Stack Software Development</h3> <br></br>          
              <span> <button className='edu-btn'>Feb 2022 - July 2022</button></span> <br></br> 
              <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}>           
                <a style={{textDecoration: 'none'}} href='https://moringaschool.com/'> Moringa School</a><img src="https://www.flaticon.com/free-icon/university_864102" width='30' alt=''/></h3>
              
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <div className=''>
            <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}> B.SC. Business Information Technology </h3> <br></br>
            <span><button className='edu-btn'>Sept 2013 - June 2017</button> <br></br></span>
            <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}><a style={{textDecoration: 'none'}} href='http://www.jkuat.ac.ke/'> Jomo Kenyatta University Of Agriculture and Technology</a></h3>
                <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}>Attained a Second-Class Upper Honours</h3>
             
            </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <div className=''>
        
        
      <a style={{textDecoration: 'none'}} href='https://www.linkedin.com/learning/certificates/62756bf81074727bcd1c4811fcaaaad7e17d844dc22bd56bf5ac505cd0d0792d'><p className='online-certs'>React.js Essential Training<br></br>LinkedIn Learning <i className='arrow right' style={{fontSize: '30px', float: 'right'}}></i></p></a>
      <a style={{textDecoration: 'none'}} href='https://www.linkedin.com/learning/certificates/2e54bfacf96e7ab65e2cd99fb9ac25eea1fe31ed1426c9fbc66e438e44efe78d'><p className='online-certs'>React Hooks<br></br>LinkedIn Learning<i className='arrow right' style={{fontSize: '30px', float: 'right'}}></i></p></a>
      <a style={{textDecoration: 'none'}} href='https://www.linkedin.com/learning/certificates/3eaed944a07f50678ca90e3f3cb9e194f044f0141c4cd5a56185a07ac83daf59'> <p className='online-certs'>React.js: Building an Interface<br></br>LinkedIn Learning <i className='arrow right' style={{fontSize: '30px', float: 'right'}}></i></p></a> 
      </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
   
      <div className='col-md-6'>
          
            
          
           

      </div>
      
    
    </div>
    </Slide>
    </>
  )
}
export default Education;