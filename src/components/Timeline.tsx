import * as React from "react";
import TimelineItem from "./TimelineItem";
import "../styles/timeline.css";

const timelineData = [
  {
    title: "Capital One",
    subtitle: "Software Engineer",
    date: "(February 2020 - present)",
    description:
      "Support and maintain enterprise platform infrastructure with automation and site reliability tooling. Work with HashiCorp Nomad, Consul, Terraform, and Vault, using Go, Python, Ansible, and Terraform to meet reliability, operational, and compliance standards.",
  },
  {
    title: "University of New Haven",
    subtitle: "Graduate Computer Science Teaching Assistant",
    date: "(September 2019 - December 2020)",
    description:
      "Led recitation sessions for Intermediate C/C++ and supported courses in C programming, Android development, UNIX systems programming, and object-oriented programming in C++. Helped students strengthen core programming and software engineering fundamentals.",
  },
  {
    title: "Capital One",
    subtitle: "Software Engineer Intern",
    date: "(June 2020 - August 2020)",
    description:
      "Worked with the Associate Collaboration team to design and build a full-stack internal web application. Developed the front end with React and implemented back-end services with Node.js and Express.",
  },
  {
    title: "SoluTech Inc.",
    subtitle: "Lead Software Engineer",
    date: "(January 2017 - October 2019)",
    description:
      "Co-founded and led engineering for SlideDrive, researching and developing product technologies with the team. Contributed to an Angular and Electron application using WebRTC, MongoDB, and OAuth.",
  },
  {
    title: "Capital One",
    subtitle: "Software Engineer Intern",
    date: "(June 2019 - August 2019)",
    description:
      "Built a prototype cloud monitoring solution with the Cloud Networking Services team using Python, Vue.js, and AWS. Developed serverless backend components with AWS Lambda, IAM, CloudWatch, and SQS to improve scalability and cost efficiency.",
  },
  {
    title: "Conferdense Inc.",
    subtitle: "Android Developer",
    date: "(March 2018 - May 2019)",
    description:
      "Built an Android application with Java and Google Firebase, focusing on usability and modern mobile design patterns. Identified performance and cost issues and improved the database design to reduce resource usage.",
  },
  {
    title: "The MITRE Corporation",
    subtitle: "Software Engineering Intern",
    date: "(June 2018 - August 2018)",
    description:
      "Contributed to next-generation mission planning software for U.S. Navy and Air Force users on the Advanced Mission Planning team. Partnered with designers on user experience improvements and helped build supporting backend functionality.",
  },
  {
    title: "Abbott Jewelry Systems Inc.",
    subtitle: "Software Engineer",
    date: "(October 2013 - May 2018)",
    description:
      "Developed and maintained VB.NET retail management software in an Agile environment. Implemented, tested, reviewed, and contributed production code while participating in daily standups, sprint planning, and peer code reviews.",
  },
  {
    title: "Self Employed",
    subtitle: "IT Technician",
    date: "(August 2015 - August 2017)",
    description:
      "Provided IT and computer services for residential and small business clients in the Greater New Haven area. Supported computer security, software installation, office network setup, custom PC builds, and general technical troubleshooting.",
  },
];

const Timeline = () => {
  if (timelineData.length > 0) {
    return (
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Timeline;
