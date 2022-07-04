import * as React from "react";
import profileImage from "../images/profile_pic.jpg";
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import LinkIcon from "./LinkIcon";

const IntroCard = () => {
  const LinkIconMapping = [
    {
      faIcon: faGithubSquare,
      url: "https://github.com/FanciestW",
    },
    {
      faIcon: faLinkedin,
      url: "https://linkedin.com/in/FanciestW",
    },
    {
      faIcon: faFacebookSquare,
      url: "https://facebook.com/FanciestW",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 w-full h-full sm:w-50">
      <h1 className="font-sans font-light text-light-purple text-5xl self-stretch leading-10 text-center items-center text-shadow shadow-black/25">
        Hello, I'm William
      </h1>
      <img
        className="overflow-visible w-2/5 min-w-[300px] max-w-[400px] rounded-full border-2 border-white drop-shadow-xl"
        src={profileImage}
      />
      <div className="flex flex-row items-center justify-center gap-x-8 w-fit z-10">
        {LinkIconMapping.map(({ faIcon, url }) => (
          <LinkIcon
            faIcon={faIcon}
            url={url}
            target="_blank"
            className="text-6xl text-deep-purple transition ease-in-out duration-300 hover:scale-110 hover:drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default IntroCard;
