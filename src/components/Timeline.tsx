import * as React from "react";
import TimelineItem from "./TimelineItem";
import "../styles/timeline.css";

const timelineData = [
  {
    title: "Capital One",
    subtitle: "Software Engineer",
    date: "(February 2020 - present)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
  },
  {
    title: "University of New Haven",
    subtitle: "Graduate Computer Science Teaching Assistant",
    date: "(September 2019 - December 2020)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
  },
  {
    title: "Capital One",
    subtitle: "Software Engineer Intern",
    date: "(June 2020 - August 2020)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
  },
  {
    title: "SoluTech Inc.",
    subtitle: "Lead Software Engineer",
    date: "(January 2017 - October 2019)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
  },
  {
    title: "Capital One",
    subtitle: "Software Engineer Intern",
    date: "(June 2019 - August 2019)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
  },
  {
    title: "Conferdense Inc.",
    subtitle: "Android Developer",
    date: "(March 2018 - May 2019)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
  },
  {
    title: "The MITRE Corporation",
    subtitle: "Software Engineering Intern",
    date: "(June 2018 - August 2018)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
  },
  {
    title: "Abbott Jewelry Systems Inc.",
    subtitle: "Software Engineer",
    date: "(October 2013 - May 2018)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
  },
  {
    title: "Self Employed",
    subtitle: "IT Technician",
    date: "(August 2015 - August 2017)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget in odio arcu condimentum risus Mattis est sem eget mattis tortor risus quis. Est quis facilisis sit purus, quis elementum vitae non a.",
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
