import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import NavbarButton from "../navbar-button/navbar-button.component";
import { bio } from "../../data/home.data";
import { projects } from "../../data/project.data";
import useToggleTheme from "../../hooks/useToggleTheme";

const Navbar = () => {
  const { theme, setTheme } = useToggleTheme();
  const [showNav, setShowNav] = useState(false);
  
  return (
    <div className="grid-cols-2 lg:flex justify-between items-center py-5 lg:py-10 px-3 lg:px-0 border border-t-0 border-r-0 border-l-0 border-b-2 max-w-full border-gray-300">
      <div className="w-full flex justify-between">
        <NavbarButton href="/" className="font-semibold border-2 border-gray-300">
          {bio.name.first.toUpperCase()}
        </NavbarButton>
        <div className="flex">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="mr-4 lg:mr-0 focus:outline-none text-black dark:text-white p-4"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <FaSun className="text-2xl" />
            ) : (
              <FaMoon className="text-2xl" />
            )}
          </button>
          <button
            className="lg:hidden focus:outline-none text-2xl"
            onClick={() => setShowNav(!showNav)}
          >
            {!showNav ? <span>&#9776;</span> : <span>&#120;</span>}
          </button>
        </div>
      </div>
      <div
        className={`lg:flex lg:flex-row lg:w-auto lg:gap-x-1 justify-around ${
          showNav ? "flex flex-col items-center" : "hidden"
        }`}
        onClick={() => setShowNav(false)}
      >
        <NavbarButton href="/experience">Experience</NavbarButton>
        {/* {
          projects && projects.length > 0 && (
            <NavbarButton href="/projects">Projects</NavbarButton>
          )
        } */}
        {/* {
          tools && tools.length > 0 && (
            <NavbarButton href="/tools">Tools</NavbarButton>
          )
        }
        {
          resources && resources.length > 0 && (
            <NavbarButton href="/resources">Resources</NavbarButton>
          )
        } */}
        {/* {
          bio.blogLink && (
          <NavbarButton href={bio.blogLink} target="_blank">
            <span className="flex items-center">
              <span className="mr-1">Blog</span>
              <FaExternalLinkAlt />
            </span>
          </NavbarButton>
          )
        } */}
      </div>
    </div>
  );
};

export default Navbar;
