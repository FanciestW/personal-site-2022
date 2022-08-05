import * as React from "react";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const ContactInfo = () => {
  return (
    <div
        id="contact"
        className="snap-start snap-always flex flex-col flex-start gap-12 items-center bg-light-purple h-fit min-h-screen w-full  bg-no-repeat bg-relative bg-[right_0_top_0] bg-contain"
      >
        <img src="/assets/wave_3.svg" className="w-full"></img>
        <div className="flex flex-col md:flex-row grow justify-center flex-nowrap gap-8 min-h-fit w-9/12 max-w-screen-lg items-center mix-blend-difference text-blended-text py-10 sm:py-0">
          <div className="whitespace-nowrap font-sans text-3xl font-normal uppercase">
            Get In Touch
          </div>
          <div className="hidden md:block h-[150px] border-l-2 border-solid border-blended-text"></div>
          <div className="flex flex-col gap-4 shrink font-san font-thin text-lg md:text-xl lg:text-2xl">
            {contactInfoList.map((contactInfo) => (
              <div className="flex flex-row gap-4 items-center">
                <FontAwesomeIcon icon={contactInfo.icon} className="text-3xl" />
                <a href={contactInfo.link} target="_blank">
                  <span className="text-md sm:text-md lg:text-xl">
                    {contactInfo.text}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ContactInfo;