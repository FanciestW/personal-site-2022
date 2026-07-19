import * as React from "react";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ILink {
  href: string;
  text: string;
}

const links: ILink[] = [
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
  const [activeHref, setActiveHref] = React.useState(links[0].href);

  React.useEffect(() => {
    const sections = links
      .map(({ href }) => document.getElementById(href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="container fixed top-0 right-0 z-50 mix-blend-difference hidden sm:block">
        <div className="flex flex-row justify-end gap-x-12 px-10 py-8 z-0 uppercase text-base text-blended-text">
          {links.map(({ href, text }: ILink) => (
            <a
              key={href}
              href={`#${href}`}
              // Cancel the browser's instant jump; Lenis's own click listener
              // still fires scrollTo for the smooth animation.
              onClick={(event) => event.preventDefault()}
              className={`hover:cursor-pointer ${
                activeHref === href ? "underline underline-offset-8" : ""
              }`}
            >
              {text}
            </a>
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
