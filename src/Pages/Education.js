import './Education.css';
import cert from '../icons/certificate.png'
import inst from '../icons/university.png'
import cal from '../icons/calendar.png'

function Education(){
  return(
    <>
     <h1 style={{textAlign: "center", paddingBottom: '10px', paddingTop: '10px'}}>Education And Work Experience</h1>
         
    <div className='row'>
      
      <div className='col-md-6 '> 
      <h3 style={{textDecoration: "underline"}}>Education</h3>
        <div className=''>
        <img src={cert} alt="cert" width={30} style={{display: 'inline-block', verticalAlign:'top'}}/>: <h3 style={{display: 'inline-block'}}>CERTIFICATE - FULL STACK SOFTWARE DEVELOPMENT</h3> <br></br>
        <img src={cal} alt="calendar" width={30}/> <button className='edu-btn'>Feb 2022 - July 2022</button> <br></br>      
          <img src={inst} alt="institution" width={30}/> <h3> <a href='https://moringaschool.com/'> Moringa School</a></h3>

        </div>
      
        <div className=''>
        <img src={cert} alt="cert" width={30}/>  <h2>B.SC. BUSINESS INFORMATION TECHNOLOGY</h2> <br></br>
        <img src={cal} alt="calendar" width={30}/><button className='edu-btn'>Sept 2013 - June 2017</button> <br></br>      
        <img src={inst} alt="institution" width={30}/> <h3> <a href='http://www.jkuat.ac.ke/'> Jomo Kenyatta University Of Agriculture and Technology</a></h3>
            <h2>Attained a Second-Class Upper Honours</h2>

        </div>
      </div>
      
      <div className='col-md-6'>
        <h3 style={{textDecoration: "underline"}}>Work Experience</h3>
        <div className=''>
        <h3> <a href='https://moringaschool.com/'>Andela Kenya</a></h3>

          <h2>Software Developer trainee</h2> <br></br>
          <button className='edu-btn'>Feb 2019 - March 2019</button> <br></br>      
           <p>As a trainee I was part of the boot camp to gain an employment opportunity at Andela .
Unfortunately, I did not make it through the end of the boot camp, however I gained skills
in python, collaboration and version control using Github and Git</p>
        </div>
        <div className=''>
        <h3> <a href='https://www.intmedicaltreatment.com/'>International Medical Treatment</a></h3>
           
          <h2>Web Developer</h2> 
          <button className='edu-btn'>November 2018 — Feb 2019</button> <br></br>      
           <p>
           I worked on the Company's websites <a href= "https://www.intmedicaltreatment.com/">International Medical Treatment </a>and <a href= 'myhealthafrica.com/'>My Health Africa</a>, adding new pages and
new features i.e. Doctor SignUp forms, Search Function etc.
           </p>
        </div>

        <div className=''>
        <h2>Mambo Software</h2>
         
          <h3>Junior Software Developer</h3>
           <button className='edu-btn'>October 2017 — October 2018</button> <br></br>      
           <p>
           I worked in a team developing desktop applications in VB.net using Visual Studio 2010,
2017. Applications we developed include:
            <ul>
              <li>ERPs (enterprise resource planning system)</li>
              <li>Hospital Management System</li>
              <li>School Management System</li>
              <li>POS (Point Of Sale systems)</li>
              <li>CRMs (Customer Relationship Management system)</li>
              <li>Sacco systems for managing loans.</li>
            </ul>
           </p>

        </div>
        <div className=''>
        <h3> <a href='http://www.kplc.co.ke/'>Kenya Power and Lighting Company</a></h3>

          <h2>Intern, IT Support</h2> 
          <button className='edu-btn'>Feb 2022 - July 2022</button> <br></br>      
           <p>As an intern I did the following:
            <ul>
              <li>Installation, configuration of software as well as troubleshooting, Printer
installation and connection.</li>
              <li>Migration of PC/Laptop to different domain .</li>
              <li>Installation of operating system.</li>
              <li>Data Networking and
telecommunication (switch and router configuration, LAN, WAN, Trunking ,
Crimping)</li>

            </ul>
           </p>
        </div>
        
      </div>

    </div>
    
    </>
  )
}
export default Education;