import Link from "next/link";
import { useState } from "react";
import NavbarButton from "../navbar-button/navbar-button.component";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="grid-cols-2 lg:flex justify-between items-center py-5 lg:py-10 px-3 lg:px-0 border border-t-0 border-r-0 border-l-0 border-b-2 max-w-full">
      <div className="w-full flex justify-between">
        <NavbarButton href="/" className="font-semibold border-2">
          CHARAN
        </NavbarButton>
        <div className="flex">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="mr-4 lg:mr-0 focus:outline-none text-black dark:text-white p-4"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
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
        className={`lg:flex lg:flex-row w-full lg:w-3/5 justify-around ${
          showNav ? "flex flex-col items-center" : "hidden"
        }`}
        onClick={() => setShowNav(false)}
      >
        <NavbarButton href="/projects">Projects</NavbarButton>
        <NavbarButton href="/tools">Tools</NavbarButton>
        <NavbarButton href="/resources">Resources</NavbarButton>
      </div>
    </div>
  );
};

export default Navbar;
