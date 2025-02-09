import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import { IoSchool as SchoolIcon } from "react-icons/io5";
import { FaStar as StarIcon } from "react-icons/fa";
import "./WorkExperience.css";
import { getTimeline } from "../queries/getTimeline";

const WorkExperience = () => {
  const [timeLineData, setTimeLineData] = useState(null);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  if (!timeLineData) return <div>Loading...</div>;
  console.log("🚀 ~ timeLineData:", timeLineData);

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">
          📅 Work Experience & Education Timeline
        </h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: "rgb(33, 150, 243)", color: "#fff" }
                  : { background: "rgb(240, 240, 240)", color: "#fff" }
                : { background: "rgb(255, 224, 230)", color: "#fff" }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? {
                    borderRight:
                      index === 0
                        ? "7px solid rgb(33, 150, 243)"
                        : "7px solid rgb(240, 240, 240)",
                  }
                : { borderRight: "7px solid rgb(255, 224, 230)" }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: "rgb(33, 150, 243)", color: "#fff" }
                : { background: "rgb(255, 160, 200)", color: "#fff" }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: "black" }}>
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.name}
                </h4>
                <p className="vertical-timeline-element-tech">
                  🔧 {item.techStack}
                </p>
                <p>{item.summaryPoints}</p>

                {/* Display projects if they exist */}
                {item.projects && item.projects.length > 0 && (
  <div className="projects-container">
    <h4 className="project-title">📂 Key Projects</h4>
    <div className="projects-list">
      {item.projects.map((project, idx) => (
        <div key={idx} className="project-item">
          <div className="project-header">
            <span className="project-icon">🚀</span>
            <h5 className="project-name">{project.name}</h5>
          </div>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
)}

              </div>
            ) : (
              <div style={{ color: "black" }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.title}
                </h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
