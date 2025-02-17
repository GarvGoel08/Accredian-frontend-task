import React from "react";
import Logo from "../images/Logo.png";
import ChevronDown from "../images/ChevronDown.svg";
import burgerMenu from "../images/burger-menu.svg";
import { useState } from "react";

export default function Navbar() {
  // Navbar Components
  const navLinks = [
    {
      name: "Refer & Earn",
      href: "#refer",
    },
    {
      name: "Resources",
      href: "#resources",
    },
    {
      name: "About Us",
      href: "#about",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    // Main Navbar Div
    <div className="flex justify-center items-center">
      <div className="flex-grow flex flex-row px-4 md:px-12 py-[9.6px] items-center justify-between max-w-[1360px]">
        {/* Logo and Courses(LeftSide) */}
        <div className="flex flex-row py-1 gap-8">
          <img className="max-w-[125px]" src={Logo} alt="Accredian Logo" />
          <button className="hidden md:flex bg-theme rounded-md flex-row items-center gap-1 text-white px-4 py-2 whitespace-nowrap">
            Courses
            <img src={ChevronDown} alt="Chevron Down" />
          </button>
        </div>
        {/* Contact Expert(RightSide) */}
        <div className="hidden xl:flex flex-row items-center gap-8">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="whitespace-nowrap">
              {link.name}
            </a>
          ))}
          <div className="flex flex-row items-center gap-4">
            <button className="bg-slate-400/20 rounded-md py-2 px-[18px] whitespace-nowrap font-medium">
              Login
            </button>
            <button className="bg-theme text-white rounded-md py-2 px-[18px] whitespace-nowrap font-medium">
              Try for free
            </button>
          </div>
        </div>
        {/* Hamburger Menu(Only for Mobile) */}
        <button className="xl:hidden" onClick={() => setIsMenuOpen(true)}>
          <img className="h-7" src={burgerMenu} alt="Burger Menu" />
        </button>
      </div>
      {/* Mobile Menu  */}
      {isMenuOpen && (
        <div className="fixed bg-white w-screen h-screen xl:hidden">
          <div className="fixed top-0 left-0 w-screen h-screen bg-white flex flex-col items-center p-6 z-50 shadow-lg">
            <div className="flex w-full justify-end items-center mb-6">
              <button onClick={() => setIsMenuOpen(false)}>
                <img className="h-7" src={burgerMenu} alt="Close Menu" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-between gap-6 w-full h-full">
              <div className="flex flex-col items-center gap-6 w-full">
                <img
                  className="max-w-[125px]"
                  src={Logo}
                  alt="Accredian Logo"
                />
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col items-center gap-3 w-full">
                <button className="bg-slate-400/20 rounded-md py-2 px-[18px] whitespace-nowrap font-medium w-full text-center">
                  Login
                </button>
                <button className="bg-theme text-white rounded-md py-2 px-[18px] whitespace-nowrap font-medium w-full text-center">
                  Try for free
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
