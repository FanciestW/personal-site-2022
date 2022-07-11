import * as React from "react";
import IntroCard from "../components/IntroCard";
import { Link } from "react-scroll";

import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const MainPage = () => {
  const LinkIconMapping = [
    {
      faIcon: faGithubSquare,
      url: "https://github.com/FanciestW",
    },
    {
      faIcon: faLinkedin,
      url: "https://linkedin.com/in/FanciestW",
    },
    {
      faIcon: faFacebookSquare,
      url: "https://facebook.com/FanciestW",
    },
  ];
  return (
    <div className="select-none">
      <div className="container fixed top-0 right-0 z-50 mix-blend-difference">
        <div className="flex flex-row justify-end gap-x-12 px-10 py-8 z-0 uppercase text-base text-blended-text">
          <Link
            smooth
            spy
            hashSpy
            activeClass="underline underline-offset-8"
            to="home"
          >
            Home
          </Link>
          <Link
            smooth
            spy
            hashSpy
            activeClass="underline underline-offset-8"
            to="about-me"
          >
            About Me
          </Link>
          <Link
            smooth
            spy
            hashSpy
            activeClass="underline underline-offset-8"
            to="work"
          >
            Work History
          </Link>
          <Link
            smooth
            spy
            hashSpy
            activeClass="underline underline-offset-8"
            to="contact"
          >
            Contact Info
          </Link>
        </div>
      </div>
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
        <div className="flex flex-col lg:flex-row justify-center flex-nowrap gap-12 h-screen  min-h-fit w-9/12 max-w-screen-lg items-center mix-blend-difference text-blended-text py-10 sm:py-0">
          <div className="whitespace-nowrap font-sans text-3xl font-normal uppercase">
            About Me
          </div>
          <div className="shrink font-san text-lg md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
            in odio arcu condimentum risus. Mattis est sem eget mattis tortor
            risus quis. Est quis facilisis sit purus, quis elementum vitae non
            a.
            <br />
            <br />
            Sapien blandit nulla elementum non. Nibh tristique luctus placerat
            tortor. Duis venenatis elementum volutpat dignissim. Sed sagittis,
            pellentesque in egestas. Diam aenean blandit sed cras tellus nec
            nisl nunc.
            <br />
            <br />
            Elementum tempor tincidunt mus eleifend praesent hac vel, dictumst.
            Est nunc tempor hac aliquet amet, nisl, ut. Luctus enim porttitor id
            pharetra, vulputate.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
