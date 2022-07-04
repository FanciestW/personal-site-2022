import * as React from "react";
import IntroCard from "../components/IntroCard";

const MainPage = () => {
  return (
    <div className="bg-deep-purple">
      <div className="container h-screen w-full min-h-fit min-w-full">
        <IntroCard />
      </div>
      <div className="relative w-screen h-screen bg-transparent bg-intro-wave-svg bg-relative bg-[right_0_bottom_calc(25vh)] bg-contain bg-no-repeat"></div>
    </div>
  );
};

export default MainPage;
