import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "figma:asset/ea83056daae34d1e067675cc4ea62e324cbb19d4.png";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Start Trips Logo" className="h-20 w-auto brightness-0 invert" />
            </div>
            <p className="b3 text-gray-300">
              Your trusted travel partner for unforgettable journeys across India.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-brand-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="h8 mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li><Link to="/" className="b3 text-gray-300 hover:text-brand-secondary transition-colors">Home</Link></li>
              <li><Link to="/destinations" className="b3 text-gray-300 hover:text-brand-secondary transition-colors">Destinations</Link></li>
              <li><Link to="/packages" className="b3 text-gray-300 hover:text-brand-secondary transition-colors">Packages</Link></li>
              <li><Link to="/support" className="b3 text-gray-300 hover:text-brand-secondary transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="h8 mb-4">Services</h6>
            <ul className="space-y-2">
              <li><Link to="/packages" className="b3 text-gray-300 hover:text-brand-secondary transition-colors">Tour Packages</Link></li>
              <li><Link to="/search" className="b3 text-gray-300 hover:text-brand-secondary transition-colors">Custom Itinerary</Link></li>
              <li><Link to="/support" className="b3 text-gray-300 hover:text-brand-secondary transition-colors">Travel Insurance</Link></li>
              <li><Link to="/support" className="b3 text-gray-300 hover:text-brand-secondary transition-colors">Visa Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="h8 mb-4">Contact Us</h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                <a href="mailto:starttrips.in@gmail.com" className="b3 text-gray-300 hover:text-brand-secondary transition-colors">
                  starttrips.in@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                <a href="tel:+918886466626" className="b3 text-gray-300 hover:text-brand-secondary transition-colors">
                  +91 88864 66626
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-brand-secondary mt-0.5 flex-shrink-0" />
                <span className="b3 text-gray-300">
                  Plot No-2, Sainagar Colony, Near GP Office Kummarikunta, Hayathnagar, Hyderabad - 501505
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="b4 text-gray-400">
            &copy; {new Date().getFullYear()} Start Trips. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}