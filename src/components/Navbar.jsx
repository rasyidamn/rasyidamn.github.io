import { Menu, X } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScroll ? "py-3 bg-background/90 " : "py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">rasyidamn </span>
            portofolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 font-semibold items-center">
          {navItems.map((navItem, key) => (
            // <a
            //   href={navItem.href}
            //   key={key}
            //   className="text-foreground/80 hover:text-primary transition-colors duration-300"
            // >

            //   {navItem.name}
            // </a>

            <Link
              to={navItem.href}
              spy={true}
              smooth={true}
              duration={500}
              key={key}
              className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {navItem.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <div
          className={`fixed right-0 top-0 w-full h-screen bg-background/50 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((navItem, key) => (
              // <a
              //   href={navItem.href}
              //   key={key}
              //   className="text-foreground/80 hover:text-primary transition-colors duration-500"
              //   onClick={() => setIsMenuOpen(false)}
              // >
              //   {navItem.name}
              // </a>

              <Link
                to={navItem.href}
                spy={true}
                smooth={true}
                duration={500}
                key={key}
                className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.name}
              </Link>
            ))}
            

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
