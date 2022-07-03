import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ILinkIcon {
  url: string;
  faIcon: IconDefinition;
  className?: string;
  target?: string;
}

const LinkIcon = (props: ILinkIcon) => {
  return (
    <a href={props.url} target={props.target} rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
      <FontAwesomeIcon icon={props.faIcon} className={props.className} />
    </a>
  )
};

LinkIcon.propTypes = {
  url: PropTypes.string.isRequired,
  faIcon: PropTypes.object.isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
}

export default LinkIcon;