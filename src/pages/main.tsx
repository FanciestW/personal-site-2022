import * as React from "react";
import IntroCard from "../components/IntroCard";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";

const MainPage = () => {
  return (
    <div className="select-none">
      <NavBar />
      <div
        id="home"
        className="snap-start snap-always bg-deep-purple bg-wave-1-svg bg-no-repeat bg-relative bg-[right_0_bottom_0] bg-contain"
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
        className="snap-start snap-always flex justify-center lg:items-center bg-deep-purple h-fit min-h-screen w-full bg-wave-2-svg bg-no-repeat bg-relative bg-[right_0_top_0] bg-contain"
      >
        <div className="min-h-screen mt-[calc(10vw)]">
          <p className="text-3xl text-blended-text uppercase top-0 mt-10 mix-blend-difference">
            Work History
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
