import * as React from "react";
import IntroCard from "../components/IntroCard";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import WorkHistory from "../components/WorkHistory";
import ContactInfo from "../components/ContactInfo";

const IndexPage = () => {
  const contactInfoList = [
    {
      icon: faPhone,
      text: "(917) 434-8023",
      link: "tel:9174348023",
    },
    {
      icon: faAt,
      text: "WLIN26@YAHOO.COM",
      link: "mailto:wlin26@yahoo.com",
    },
    {
      icon: faLinkedin,
      text: "https://linkedin.com/in/FanciestW",
      link: "https://linkedin.com/in/FanciestW",
    },
    {
      icon: faGithub,
      text: "https://github.com/FanciestW",
      link: "https://github.com/FanciestW",
    },
  ];
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
