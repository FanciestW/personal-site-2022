import * as React from "react";
import { Link } from "react-scroll";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ILink {
  href: string;
  text: string;
}

const links = [
  {
    href: "home",
    text: "Home",
  },
  {
    href: "about-me",
    text: "About Me",
  },
  {
    href: "work",
    text: "Work History",
  },
  {
    href: "contact",
    text: "Contact Info",
  },
];

const NavBar = () => {
  return (
    <>
      <div className="container fixed top-0 right-0 z-50 mix-blend-difference hidden sm:block">
        <div className="flex flex-row justify-end gap-x-12 px-10 py-8 z-0 uppercase text-base text-blended-text">
          {links.map(({ href, text }: ILink) => (
            <Link
              spy
              hashSpy
              activeClass="underline underline-offset-8"
              className="hover:cursor-pointer"
              to={href}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
      <div className="container fixed top-0 right-0 z-50 w-full mix-blend-difference block sm:hidden">
        <div className="flex flex-row justify-end gap-x-12 p-5 z-0 uppercase text-base text-blended-text">
          <FontAwesomeIcon icon={faHamburger} className="text-3xl" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
