import * as React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="container fixed top-0 right-0 z-50 mix-blend-difference hidden sm:block">
      <div className="flex flex-row justify-end gap-x-12 px-10 py-8 z-0 uppercase text-base text-blended-text">
        <Link spy hashSpy activeClass="underline underline-offset-8" className="hover:cursor-pointer" to="home">
          Home
        </Link>
        <Link
          spy
          hashSpy
          activeClass="underline underline-offset-8"
          className="hover:cursor-pointer" to="about-me"
        >
          About Me
        </Link>
        <Link spy hashSpy activeClass="underline underline-offset-8" className="hover:cursor-pointer" to="work">
          Work History
        </Link>
        <Link
          spy
          hashSpy
          activeClass="underline underline-offset-8"
          className="hover:cursor-pointer" to="contact"
        >
          Contact Info
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
