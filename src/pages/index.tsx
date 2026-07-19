import * as React from "react";
import IntroCard from "../components/IntroCard";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import WorkHistory from "../components/WorkHistory";
import ContactInfo from "../components/ContactInfo";
import useSmoothScroll from "../hooks/useSmoothScroll";

const SECTION_IDS = ["home", "about-me", "work", "contact"];

const IndexPage = () => {
  useSmoothScroll(SECTION_IDS);

  return (
    <div className="select-none">
      <NavBar />
      <IntroCard />
      <AboutMe />
      <WorkHistory />
      <ContactInfo />
    </div>
  );
};

export default IndexPage;
