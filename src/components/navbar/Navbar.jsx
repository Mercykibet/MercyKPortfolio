import React, { useEffect, useState } from "react";
import { logo } from "../../assets"; // Assuming you'll use logo somewhere
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navigation } from "../../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlenavclick = (e, url) => {
    e.preventDefault();
    const targetElement = document.querySelector(url);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "scroll",
        block: "start",
      });
      window.history.pushState(null, "", url);
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/20 backdrop-blur-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Brand */}
          <a href="#" className="text-white text-lg font-bold">
            Mercie
          </a>
          {/* menu for small screens */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:text-purple-400 transition-colors bg-purple-900 p-2 rounded-md"
            >
              {menuOpen ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-white w-5 h-5"
                />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-white w-5 h-5" />
              )}
            </button>
          </div>
          {/* navigation links for larger screens */}
          <div className="hidden sm:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={(e) => handlenavclick(e, item.url)}
                className="text-white hover:text-purple-400 transition-colors bg-transparent"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        {/* mobile phone menu */}
        <div className="sm:hidden bg-black/70 backdrop-bblur-lg rounded-lg mt-2">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => {
              <a
                key={item.id}
                href={item.url}
                onClick={(e) => handlenavclick(e, item.url)}
                className="text-white "
              ></a>;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
