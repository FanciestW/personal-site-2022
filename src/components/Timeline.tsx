import * as React from "react";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    title: "Capital One",
    subtitle: "Software Engineer",
    date: "(February 2020 - present)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
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
    date: "(September 2019 - December 2020)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
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
    title: "Capital One",
    subtitle: "Software Engineer Intern",
    date: "(June 2020 - August 2020)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
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
    title: "SoluTech Inc.",
    subtitle: "Lead Software Engineer",
    date: "(January 2019 - October 2019)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
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
