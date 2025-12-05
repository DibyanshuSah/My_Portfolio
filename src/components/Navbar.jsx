import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", to: "#about" },
    { name: "YouTube", to: "#youtube" },
    { name: "Skills", to: "#skills" },
    { name: "Projects", to: "#projects" },
    { name: "Experience", to: "#experience" },
    { name: "Education", to: "#education" },
    { name: "Achievements", to: "#achievements" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0f1c] bg-opacity-80 backdrop-blur-lg border-b border-gray-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo / Name */}
        <h1 className="text-2xl font-bold">Dibyanshu</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg ml-10">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.to}
                className="hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div 
          className="md:hidden text-2xl cursor-pointer" 
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0a0f1c] px-6 pb-4">
          <ul className="flex flex-col gap-4 text-lg">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.to}
                  className="block py-2 hover:text-blue-400"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
