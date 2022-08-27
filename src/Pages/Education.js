import './Education.css';

function Education(){
  return(
    <>
     <h1>Education And Work Experience</h1>
         
    <div className='row'>
      <h1>Education</h1>
      <div className='col-md-6'> 
        <div className=''>
          <h2>CERTIFICATE - FULL STACK SOFTWARE DEVELOPMENT</h2> <br></br>
          <button className='edu-btn'>Feb 2022 - July 2022</button> <br></br>      
            <h3> <a href='https://moringaschool.com/'> Moringa School</a></h3>

        </div>
      
        <div className=''>
          <h2>B.SC. BUSINESS INFORMATION TECHNOLOGY</h2> <br></br>
          <button className='edu-btn'>Sept 2013 - June 2017</button> <br></br>      
            <h3> <a href='http://www.jkuat.ac.ke/'> Jomo Kenyatta University Of Agriculture and Technology</a></h3>
            <h2>Attained a Second-Class Upper Honours</h2>

        </div>
      </div>
      <h1>Work Experience</h1>
      <div className='col-md-6'>
        
      </div>

    </div>
    
    </>
  )
}
export default Education;