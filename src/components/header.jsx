import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <header>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <img
                src="/name.png"
                alt="TarVen Logo"
                className="w-40 h-auto cursor-pointer"
              />
            </Link>

            {/* Desktop Menu */}
            {isHomePage ? (
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#services"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Services
                </a>
                <a
                  href="#whyus"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Why Us
                </a>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  About
                </a>
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex">
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isHomePage && (
              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu (only on homepage) */}
        {isHomePage && isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#services"
                className="block text-slate-300 hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#whyus"
                className="block text-slate-300 hover:text-blue-400 transition-colors"
              >
                Why Us
              </a>
              <a
                href="#about"
                className="block text-slate-300 hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <Link to="/contact">
                <button className="w-full bg-gradient-to-r from-blue-600 to-sky-600 px-6 py-2 rounded-full">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
