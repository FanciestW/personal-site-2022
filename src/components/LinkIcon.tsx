import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ILinkIcon {
  url: string;
  faIcon: IconDefinition;
}

const LinkIcon = (props: ILinkIcon) => {
  return (
    <a href={props.url}>
      <FontAwesomeIcon icon={props.faIcon} className="text-5xl" />
    </a>
  )
};

LinkIcon.propTypes = {
  url: PropTypes.string.isRequired,
  faIcon: PropTypes.object.isRequired,
}

export default LinkIcon;