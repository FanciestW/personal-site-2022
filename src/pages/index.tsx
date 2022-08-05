import * as React from "react";
import IntroCard from "../components/IntroCard";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Timeline from "../components/Timeline";
import ContactInfo from "../components/ContactInfo";

const IndexPage = () => {
  return (
    <div className="select-none">
      <NavBar />
      <IntroCard />
      <AboutMe />
      <div
        id="work"
        className="snap-start snap-always flex justify-center lg:items-center bg-deep-purple h-fit min-h-screen w-full bg-wave-2-svg bg-no-repeat bg-relative bg-[right_0_top_0] bg-contain"
      >
        <div className="min-h-screen w-screen pt-[calc(10vw)]">
          <p className="text-3xl text-blended-text text-center uppercase top-0 mt-10 mix-blend-difference">
            Work History
          </p>
          <Timeline />
        </div>
      </div>
      <ContactInfo />
    </div>
  );
};

export default IndexPage;
