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
    <div className="timeline-item-content text-light-purple">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <p className="w-full text-xl">{data.title}</p>
      <p className="w-full text-lg my-[5px]">{data.subtitle}</p>
      <time className="w-6/12 text-lg my-[5px]">{data.date}</time>
      <p className="w-full text-md my-[5px]">{data.description}</p>
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
