import * as React from "react";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    title: "Capital One",
    subtitle: "Software Engineer",
    date: "March 03 2017",
    description: "Wrote my first blog post ever on Medium",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
      text: "Read more",
    },
  },
  {
    title: "University of New Haven",
    subtitle: "Graduate Computer Science Teaching Assistant",
    date: "March 03 2017",
    description: "Wrote my first blog post ever on Medium",
    category: {
      tag: "medium",
      color: "#018f69",
    },
    link: {
      url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
      text: "Read more",
    },
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
