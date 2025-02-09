import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGithub, FaJava, FaHtml5 } from 'react-icons/fa';
import { SiTypescript,SiDjango, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage, SiPython, SiCplusplus, SiDocker, SiJavascript, SiScikitlearn, SiPytorch, SiLinux } from 'react-icons/si';

const iconMap = {
  SiPython: <SiPython />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  FaReact: <FaReact />,
  FaAws: <FaAws />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiNetlify: <SiNetlify />,
  SiImessage: <SiImessage />,
  SiDjango: <SiDjango />,
  SiCplusplus:<SiCplusplus />,
  FaGithub:<FaGithub/>,
  SiDocker: <SiDocker />,
  FaHtml5: <FaHtml5 />,
  SiJavascript:<SiJavascript />,
  SiScikitlearn:<SiScikitlearn/>,
  SiPytorch:<SiPytorch/>,
  SiLinux:<SiLinux/>,
};


const Skills= () => {

  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;


  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});
  
  // Sort skills within each category
  Object.keys(skillsByCategory).forEach(category => {
    skillsByCategory[category].sort((a, b) => a.name.localeCompare(b.name));
  });

  


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).sort().map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
