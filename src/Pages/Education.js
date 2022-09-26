import './Education.css';

function Education(){
  return(
    <>
     <h1 className='heading w3-animate-left' style={{textAlign: "center", paddingBottom: '10px', paddingTop: '10px', fontFamily: 'Libre Caslon Text, serif'}}>Education And Work Experience</h1>
         
    <div className='row w3-animate-left'>
    <h3 style={{textDecoration: "underline", marginBottom:'20px', textAlign: 'center',fontFamily: 'Libre Caslon Text, serif'}}>Work Experience</h3>
       
      
      <div className='col-md-6 '> 
      <div className=''>
         <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}> Freelance Developer</h3>
          <button className='edu-btn'>March 2019 - Present</button> <br></br>      
           <p>As a freelancer  I've been working on solo projects as well collaborating with others.</p>
           < hr style={{color: 'white'}}/>
        </div>
         <div className=''>
         <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}> <a style={{textDecoration: 'none'}} href='https://andela.com/'>Andela Kenya</a></h3>

        
        
          <h2 style={{fontFamily: 'Libre Caslon Text, serif'}}>Software Development trainee</h2> <br></br>
          <button className='edu-btn'>Feb 2019 - March 2019</button> <br></br>      
           <p>As a trainee I was part of the boot camp to gain an employment opportunity at Andela .
Unfortunately, I did not make it through the end of the boot camp, however I gained skills
in python, collaboration and version control using Github and Git</p>
        </div>
        < hr style={{color: 'white'}}/>
        <div className=''>
        <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}> <a style={{textDecoration: 'none'}} href='https://www.intmedicaltreatment.com/'>International Medical Treatment</a></h3>
           
          <h2 style={{fontFamily: 'Libre Caslon Text, serif'}}>Web Developer</h2> 
          <button className='edu-btn'>November 2018 — Feb 2019</button> <br></br>      
           <p>
           I worked on the Company's websites <a style={{textDecoration: 'none'}} href= "https://www.intmedicaltreatment.com/">International Medical Treatment </a>and <a style={{textDecoration: 'none'}} href= 'myhealthafrica.com/'>My Health Africa</a>, adding new pages and
new features i.e. Doctor SignUp forms, Search Function etc.
           </p>
           < hr style={{color: 'white'}}/>
        </div>
        
      </div>
      
      
      
      <div className='col-md-6'>      
        

        <div className=''>
        <h2 style={{ fontFamily: 'Libre Caslon Text, serif'}}>Mambo Software</h2>
         
          <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}>Junior Software Developer</h3>
           <button className='edu-btn'>October 2017 — October 2018</button> <br></br>      
           <p>
           I worked in a team developing desktop applications in VB.net using Visual Studio 2010,
2017. Applications we developed include: </p>
            <ul className='description-list'>
              <li>ERPs (enterprise resource planning system)</li>
              <li>Hospital Management System</li>
              <li>School Management System</li>
              <li>POS (Point Of Sale systems)</li>
              <li>CRMs (Customer Relationship Management system)</li>
              <li>Sacco systems for managing loans.</li>
            </ul>
           

        </div>
        < hr style={{color: 'white'}}/>
        <div className=''>
        <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}> <a style={{textDecoration: 'none'}} href='http://www.kplc.co.ke/'>Kenya Power and Lighting Company</a></h3>

          <h2 style={{fontFamily: 'Libre Caslon Text, serif'}}>Intern, IT Support</h2> 
          <button className='edu-btn'>Feb 2016 - July 2016</button> <br></br>      
           <p>As an intern I did the following:</p>
            <ul className='description-list'>
              <li>Installation, configuration of software as well as troubleshooting, Printer
installation and connection.</li>
              <li>Migration of PC/Laptop to different domain .</li>
              <li>Installation of operating system.</li>
              <li>Data Networking and
telecommunication (switch and router configuration, LAN, WAN, Trunking ,
Crimping)</li>

            </ul>
           
        </div>
        < hr style={{color: 'white'}}/>
        
      </div>

    </div>
    <div className='row w3-animate-right'>
    <h3 style={{textDecoration: "underline", marginBottom:'20px', textAlign: 'center', marginTop: '40px', fontFamily: 'Libre Caslon Text, serif'}}>Education</h3>
   
      <div className='col-md-6'>
          <div className=''>
              <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}>CERTIFICATE - Full Stack Software Development</h3> <br></br>          
              <span> <button className='edu-btn'>Feb 2022 - July 2022</button></span> <br></br> 
              <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}>           
                <a style={{textDecoration: 'none'}} href='https://moringaschool.com/'> Moringa School</a><img src="https://www.flaticon.com/free-icon/university_864102" width='30' alt=''/></h3>
              
            </div>
            < hr style={{color: 'white'}}/>
          
            <div className=''>
            <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}> B.SC. Business Information Technology </h3> <br></br>
            <span><button className='edu-btn'>Sept 2013 - June 2017</button> <br></br></span>
            <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}><a style={{textDecoration: 'none'}} href='http://www.jkuat.ac.ke/'> Jomo Kenyatta University Of Agriculture and Technology</a></h3>
                <h3 style={{fontFamily: 'Libre Caslon Text, serif'}}>Attained a Second-Class Upper Honours</h3>
              < hr style={{color: 'white'}}/>
            </div>

      </div>
      <div className='col-md-6'>
        <h4>Online Certificates</h4>
        
      <a style={{textDecoration: 'none'}} href='https://www.linkedin.com/learning/certificates/62756bf81074727bcd1c4811fcaaaad7e17d844dc22bd56bf5ac505cd0d0792d'><p className='online-certs'>React.js Essential Training<br></br>LinkedIn Learning <i className='arrow right' style={{fontSize: '30px', float: 'right'}}></i></p></a>
      <a style={{textDecoration: 'none'}} href='https://www.linkedin.com/learning/certificates/2e54bfacf96e7ab65e2cd99fb9ac25eea1fe31ed1426c9fbc66e438e44efe78d'><p className='online-certs'>React Hooks<br></br>LinkedIn Learning<i className='arrow right' style={{fontSize: '30px', float: 'right'}}></i></p></a>
      <a style={{textDecoration: 'none'}} href='https://www.linkedin.com/learning/certificates/3eaed944a07f50678ca90e3f3cb9e194f044f0141c4cd5a56185a07ac83daf59'> <p className='online-certs'>React.js: Building an Interface<br></br>LinkedIn Learning <i className='arrow right' style={{fontSize: '30px', float: 'right'}}></i></p></a> 
      </div>
    
    </div>
    </>
  )
}
export default Education;