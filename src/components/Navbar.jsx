import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#310533]  m-auto left-1/2 -translate-x-1/2 shadow-md fixed top-5 w-[85%] z-50 rounded-4xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}

          <a
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-400 transition"
          >
            Babita
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <a href="#about" className="hover:text-blue-600">
              About Me
            </a>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>

            <Link to="/all-projects" className="hover:text-blue-600">
              My Projects
            </Link>
            {/* <a href="/all-projects" className="hover:text-blue-600">
              My Projects
            </a> */}
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#382f38] shadow-md rounded-b-3xl">
          <div className="px-4 py-4 space-y-3 text-white font-medium">
            <a href="#about" className="block hover:text-blue-400">
              About Me
            </a>
            <a href="#skills" className="block hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="block hover:text-blue-400">
              My Projects
            </a>
            <a href="#contact" className="block hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
