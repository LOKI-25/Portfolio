import React from 'react';
import './Recommendations.css';
import KiranKommaraju from '../images/KiranKommaraju.jpeg'; // Adjust the path based on your directory structure

const Recommendations= () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
        {/* img with url */}

          <img src={KiranKommaraju} alt="Chris Smith" className="profile-pic" />
          <div>
            <h3>Komarraju Kiran Chandra</h3>
            <p>Founder & CEO, Usurp HRTech Solutions</p>
            <p className="date">January 2023</p>
          </div>
        </div>
        
        <div className="recommendation-body">
        <p>✨ "Lokesh Narayana is an exceptionally skilled and dedicated Full-Stack Developer. During his internship at Usurp HRTech Solutions, he played a crucial role in developing an automated and integrated <strong>Human Resource Management System (HRMS)</strong> and a <strong>Performance Management Tool</strong> for manufacturing industries."</p>

<p>💡 "His ability to solve complex problems creatively has significantly enhanced our team’s performance. Notably, he built a <strong>web scraping tool</strong> that fully automated a process that previously required a dedicated employee. Our CTO was highly impressed by how the system autonomously extracts and processes critical information, eliminating manual effort and improving efficiency."</p>

<p>💼 "Lokesh demonstrated excellent teamwork and communication skills, engaging effectively with team members and adapting seamlessly to challenges. His proactive approach and confidence made a lasting impact on our projects."</p>

<p>🌟 "I highly recommend Lokesh for any <strong>Full-Stack Developer</strong> or <strong>Python Developer</strong> position. His problem-solving skills, innovative mindset, and technical abilities will be a valuable asset to any organization."</p>


</div>

      </div>
    </div>
  );
};

export default Recommendations;
