import * as React from "react";
import IntroCard from "../components/IntroCard";
import introWaveSvg from "../assets/intro_wave.svg";

const MainPage = () => {
  return (
    <div>
    <div className="mix-blend-overlay isolate bg-deep-purple bg-intro-wave-svg bg-no-repeat bg-relative bg-[right_0_bottom_0] bg-contain">
      <div className="flex h-fit w-full min-h-screen min-w-full items-center justify-center">
        {/* <img src={introWaveSvg} className="absolute z-0 w-screen bg-transparent bottom-0" /> */}
        <IntroCard />
      </div>
    </div>
    <div className="bg-light-purple h-screen w-full"></div>
    </div>
  );
};

export default MainPage;
