import * as React from "react";
import profileImage from "../images/profile_pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import LinkIcon from "../components/LinkIcon";

const MainPage = () => {
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
    <div className="container h-screen w-full min-h-full min-w-full bg-deep-purple">
      <div className="flex flex-col items-center justify-center gap-y-8 w-full sm:w-50">
        <h1 className="font-sans font-light text-light-purple text-4xl self-stretch leading-10 text-center items-center text-shadow shadow-black/25">
          Hello, I'm William
        </h1>
        <img
          className="overflow-visible h-2/5 w-2/5 min-w-[300px] max-w-[400px] rounded-full border border-white drop-shadow-md"
          src={profileImage}
        />
        <div className="flex flex-row items-center justify-center gap-x-8 w-fit">
          {/* TODO::Clean up icons, potentially make into component */}
          {LinkIconMapping.map(({ faIcon, url }) => (
            <LinkIcon
              faIcon={faIcon}
              url={url}
              target="_blank"
              className="text-6xl text-light-purple transition ease-in-out duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
