import * as React from "react";
import PropTypes from "prop-types";

interface ITimelineCategory {
  tag: string;
  color: string;
}

interface ITimelineLink {
  text: string;
  url: string;
}

interface ITimelineItemData {
  category: ITimelineCategory;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  link: ITimelineLink;
}

interface IData {
  data: ITimelineItemData;
}

const TimelineItem = ({ data }: IData) => (
  <div className="timeline-item flex justify-end my-2.5 pr-8 relative w-6/12">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <p>{data.title}</p>
      <p>{data.subtitle}</p>
      <time>{data.date}</time>
      <p>{data.description}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

TimelineItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TimelineItem;
