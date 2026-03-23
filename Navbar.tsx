import { Link, useLocation } from "react-router";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/ea83056daae34d1e067675cc4ea62e324cbb19d4.png";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Search", path: "/search" },
    { name: "Support", path: "/support" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Start Trips Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`b2 transition-colors ${
                  isActive(link.path)
                    ? "text-brand-primary"
                    : "text-gray-700 hover:text-brand-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & User */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/dashboard"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <User className="w-5 h-5 text-gray-700" />
            </Link>
            <Link
              to="/search"
              className="px-6 py-3 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b3 hover:shadow-lg transition-shadow"
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block b2 py-2 ${
                  isActive(link.path)
                    ? "text-brand-primary"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block b2 py-2 text-gray-700"
            >
              Dashboard
            </Link>
            <Link
              to="/search"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b3 text-center"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}