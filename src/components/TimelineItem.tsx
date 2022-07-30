import * as React from "react";
import PropTypes from "prop-types";

interface ITimelineItemData {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

interface IData {
  data: ITimelineItemData;
}

const TimelineItem = ({ data }: IData) => (
  <div className="timeline-item flex justify-end -my-5 pr-[30px] relative w-6/12 odd:self-end odd:justify-start odd:pl-[30px] odd:pr-0">
    <div className="timeline-item-content text-light-purple font-sans">
      <span className="circle" />
      <p className="w-full text-lg">{data.title}</p>
      <p className="w-full text-md font-light my-0">{data.subtitle}</p>
      <time className="w-full text-sm italic font-light my-0">{data.date}</time>
      <p className="w-full text-sm my-0">{data.description}</p>
    </div>
  </div>
);

TimelineItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TimelineItem;
