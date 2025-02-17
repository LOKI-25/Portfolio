import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaGoogle, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee, SiCodechef, SiCisco } from 'react-icons/si';
import { getCertifications } from '../queries/getCertifications';
const iconData = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />,
  'google': <FaGoogle />,
  'codechef':<SiCodechef />,
  'cisco':<SiCisco />

}

const Certifications = () => {

  const [certifications, setCertifications] = useState([]);

  useEffect(() => { 
    async function fetchCertifications() {
      const data = await getCertifications();
      setCertifications(data);
    }

    fetchCertifications();
  }, []);

  if (certifications.length === 0) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` }}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
