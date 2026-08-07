import React from "react";
import logo from "../assets/icons/logo.png";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const footerLinks = {
  Home: ["About Us", "Services", "Agents", "Pricing"],
  Support: ["FAQ", "Help Center", "Contact Us", "Privacy Policy"],
  "Find Us": ["San Francisco", "Beverly Hills", "Palo Alto", "Los Angeles"],
  Social: ["Instagram", "Facebook", "Twitter", "YouTube"],
};

const socialIcons = {
  Instagram: <FiInstagram className="w-4 h-4" />,
  Facebook: <FiFacebook className="w-4 h-4" />,
  Twitter: <FiTwitter className="w-4 h-4" />,
  YouTube: <FiYoutube className="w-4 h-4" />,
};

function Footer() {
  return (
    <footer className="w-full bg-[#1a0f0a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Realta logo" className="h-8 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Finding your perfect home has never been easier. Let us guide you.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-white mb-5">{category}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    {category === "Social" ? (
                      <a
                        href="#"
                        className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors duration-200"
                        aria-label={item}
                      >
                        {socialIcons[item]}
                        {item}
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Realta. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
