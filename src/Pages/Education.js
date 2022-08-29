import './Education.css';

function Education(){
  return(
    <>
     <h1 style={{textAlign: "center"}}>Education And Work Experience</h1>
         
    <div className='row'>
      
      <div className='col-md-6 '> 
      <h3 style={{textDecoration: "underline"}}>Education</h3>
        <div className=''>
        <img src={"/public/certificate.png"} alt="cert"/><h2>CERTIFICATE - FULL STACK SOFTWARE DEVELOPMENT</h2> <br></br>
        <img src={"/public/calendar.png"} alt="calendar"/> <button className='edu-btn'>Feb 2022 - July 2022</button> <br></br>      
          <img src={"/public/university.png"} alt="institution"/> <h3> <a href='https://moringaschool.com/'> Moringa School</a></h3>

        </div>
      
        <div className=''>
          <h2>B.SC. BUSINESS INFORMATION TECHNOLOGY</h2> <br></br>
          <button className='edu-btn'>Sept 2013 - June 2017</button> <br></br>      
            <h3> <a href='http://www.jkuat.ac.ke/'> Jomo Kenyatta University Of Agriculture and Technology</a></h3>
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
           
          <h2>Web Developer</h2> <br></br>
          <button className='edu-btn'>November 2018 — Feb 2019</button> <br></br>      
           <p>
           I worked on the Company's websites <a href= "https://www.intmedicaltreatment.com/">International Medical Treatment </a>and <a href= 'myhealthafrica.com/'>My Health Africa</a>, adding new pages and
new features i.e. Doctor SignUp forms, Search Function etc.
           </p>
        </div>

        <div className=''>
          <h2>CERTIFICATE - FULL STACK SOFTWARE DEVELOPMENT</h2> <br></br>
          <button className='edu-btn'>Feb 2022 - July 2022</button> <br></br>      
            <h3>Mambo Software</h3>

        </div>
        <div className=''>
          <h2>CERTIFICATE - FULL STACK SOFTWARE DEVELOPMENT</h2> <br></br>
          <button className='edu-btn'>Feb 2022 - July 2022</button> <br></br>      
            <h3> <a href='https://moringaschool.com/'> Moringa School</a></h3>

        </div>
        
      </div>

    </div>
    
    </>
  )
}
export default Education;