import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Experiences", href: "/experiences" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className={`text-2xl font-serif font-bold ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Wanderlust
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-sans font-medium transition-colors duration-300 hover:text-secondary ${
                  isScrolled ? "text-accent" : "text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
         <div className="hidden md:block">
  <Link to="/contact">
    <Button
      className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
    >
      Contact Now
    </Button>
  </Link>
</div>


          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-primary hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div
              className={`flex flex-col space-y-4 rounded-lg p-4 ${
                isScrolled ? "bg-white shadow-lg" : "bg-white/10 backdrop-blur-sm"
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-sans font-medium py-2 px-4 rounded transition-colors ${
                    isScrolled
                      ? "text-accent hover:bg-gray-100"
                      : "text-white hover:bg-white/20"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Link to="/contact">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
