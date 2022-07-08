import * as React from "react";
import IntroCard from "../components/IntroCard";

import profileImage from "../images/profile_pic.jpg";
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
    <div>
    <div className="mix-blend-overlay isolate bg-deep-purple bg-intro-wave-svg bg-no-repeat bg-relative bg-[right_0_bottom_0] bg-contain">
      <div className="flex h-fit w-full min-h-screen min-w-full items-center justify-center">
        <div className="absolute flex flex-col items-center justify-center gap-y-8 w-full h-full sm:w-50">
        <h1 className="font-sans font-light text-blended-text mix-blend-difference text-5xl self-stretch leading-10 text-center items-center text-shadow shadow-black/25">
          Hello, I'm William
        </h1>
        <img
          className="overflow-visible w-2/5 min-w-[300px] max-w-[400px] rounded-full border-2 border-white drop-shadow-xl"
          src={profileImage}
        />
        <div className="flex flex-row items-center justify-center gap-x-8 w-fit z-10 text-blended-text mix-blend-difference">
          {LinkIconMapping.map(({ faIcon, url }) => (
            <LinkIcon
              faIcon={faIcon}
              url={url}
              target="_blank"
              className="text-6xl transition ease-in-out duration-300 hover:scale-110 hover:drop-shadow-xl"
            />
          ))}
        </div>
      </div>
      </div>
    </div>
    <div className="bg-light-purple h-screen w-full"></div>
    </div>
  );
};

export default MainPage;
