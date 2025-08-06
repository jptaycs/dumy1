"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Import the hook

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get the current path
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/jp_logo.svg" alt="Logo" className="h-12 cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-80 flex items-baseline space-x-0">
              <Link href="/" className="text-white hover:text-red-500 transition-colors px-3 py-2">Home</Link>

              {isHome ? (
                <a href="#projects" className="text-white block px-3 py-2">Projects</a>
              ) : (
                <Link href="/" className="text-white block px-3 py-2">Projects</Link>
              )}

              <Link href="/about" className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2">About</Link>
              <Link href="/resume" className="text-gray-300 hover:text-red-500 transition-colors px-3 py-2">Resume</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
              <Link href="/" className="text-white block px-3 py-2">Home</Link>

              {isHome ? (
                <a href="#projects" className="text-white block px-3 py-2">Projects</a>
              ) : (
                <Link href="/" className="text-white block px-3 py-2">Projects</Link>
              )}

              <Link href="/about" className="text-gray-300 hover:text-red-500 block px-3 py-2">About</Link>
              <Link href="/resume" className="text-gray-300 hover:text-red-500 block px-3 py-2">Resume</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
