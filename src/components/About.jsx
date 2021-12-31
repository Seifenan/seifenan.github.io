import React from 'react';
import coverImage from '../assets/img/profile-pic.jpg';
function About() {
  return (
    <div className='container dSection'>
      <div>
        <img src={coverImage} className='bioImg' alt='main-profile' />
      </div>
      <div className="bioInfo">
        <h2>About Me</h2>
        <p>I am a licensed Real Estate Agent dedicated to giving clients professional service and honest advice.</p>
        <br></br>
        <p>I am also knowledgeable in QuickBooks and ADP RUN, Accounts Receivable/Payable tasks, financial reconciliation and creating PNLs.</p>
        <br></br>
        <p>I have been able to adapt based on circumstance and make critical decisions when required on numerous occasions. My strong work ethic and ability to strive on multiple occasions has led me to being recognized for exceptional leadership qualities ultimately resulting in my promotion to higher positions.</p>
      </div>
    </div>
  );
}

export default About;
