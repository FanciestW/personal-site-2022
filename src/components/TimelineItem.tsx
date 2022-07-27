import * as React from "react";
import PropTypes from "prop-types";

const TimelineItem = ({ data }) => (
  <div className="timeline-item flex justify-end my-2.5 pr-8 relative w-6/12">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
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
