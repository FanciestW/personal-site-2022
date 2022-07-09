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
      <div className="container fixed top-0 right-0 z-50 mix-blend-difference">
        <div className="flex flex-row justify-end gap-x-12 px-10 py-8 z-0 uppercase text-base text-blended-text">
          <a href="#home">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#work">Work History</a>
          <a href="#contact">Contact Info</a>
        </div>
      </div>
      <div className="bg-deep-purple bg-intro-wave-svg bg-no-repeat bg-relative bg-[right_0_bottom_0] bg-contain">
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
                  className="text-6xl transition ease-in-out duration-300 hover:scale-110 hover:drop-shadow-xl visited:text-blended-text focus:outline-none focus-visible:outline-none"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:items-center bg-light-purple h-fit min-h-screen w-full">
        <div className="flex flex-col lg:flex-row justify-center flex-nowrap gap-12 h-screen w-9/12 m-h-fit items-center mix-blend-difference text-blended-text py-10 sm:py-0">
          <div className="whitespace-nowrap font-sans text-3xl font-normal uppercase">
            About Me
          </div>
          <div className="shrink font-san text-lg md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
            in odio arcu condimentum risus. Mattis est sem eget mattis tortor
            risus quis. Est quis facilisis sit purus, quis elementum vitae non
            a.
            <br />
            <br />
            Sapien blandit nulla elementum non. Nibh tristique luctus placerat
            tortor. Duis venenatis elementum volutpat dignissim. Sed sagittis,
            pellentesque in egestas. Diam aenean blandit sed cras tellus nec
            nisl nunc.
            <br />
            <br />
            Elementum tempor tincidunt mus eleifend praesent hac vel, dictumst.
            Est nunc tempor hac aliquet amet, nisl, ut. Luctus enim porttitor id
            pharetra, vulputate.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
