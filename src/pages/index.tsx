import * as React from "react";
import IntroCard from "../components/IntroCard";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import WorkHistory from "../components/WorkHistory";
import ContactInfo from "../components/ContactInfo";

const IndexPage = () => {
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
