import * as React from "react";
import IntroCard from "../components/IntroCard";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";

import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const MainPage = () => {
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
        <AboutMe />
      </div>
      <div
        id="work"
        className="snap-start snap-always flex justify-center lg:items-center bg-deep-purple h-fit min-h-screen w-full"
      ></div>
    </div>
  );
};

export default MainPage;
