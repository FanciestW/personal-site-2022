import * as React from "react";
import IntroCard from "../components/IntroCard";
import NavBar from "../components/NavBar";

import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

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
    <div className="select-none">
      <NavBar />
      <div
        id="home"
        className="snap-start snap-always bg-deep-purple bg-intro-wave-svg bg-no-repeat bg-relative bg-[right_0_bottom_0] bg-contain"
      >
        <div className="flex h-fit w-full min-h-screen min-w-full items-center justify-center">
          <IntroCard />
        </div>
      </div>
      <div
        id="about-me"
        className="snap-start snap-always flex justify-center lg:items-center bg-light-purple h-fit min-h-screen w-full"
      >
        <div className="flex flex-col lg:flex-row justify-center flex-nowrap gap-12 h-screen  min-h-fit w-9/12 max-w-screen-lg items-center mix-blend-difference text-blended-text py-10 sm:py-0">
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
