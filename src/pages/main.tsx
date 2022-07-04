import * as React from "react";
import IntroCard from "../components/IntroCard";
import introWaveSvg from "../assets/intro_wave.svg";

const MainPage = () => {
  return (
    <div className="bg-deep-purple">
      <div className="flex h-fit w-full min-h-screen min-w-full items-center justify-center">
        <img src={introWaveSvg} className="absolute z-0 w-screen bg-transparent bottom-[20vh]" />
        <IntroCard />
      </div>
    </div>
  );
};

export default MainPage;
