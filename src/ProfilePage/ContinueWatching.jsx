import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import { FaHandsHelping } from 'react-icons/fa';


const continueWatchingConfig = {
  recruiter: [
    // { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    // { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    // { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, link: "/recommendations" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  developer: [
    // { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    // { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    // { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  stalker: [
    // { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    // { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  adventure: [
    // { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    // { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ]
};

const ContinueWatching = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
