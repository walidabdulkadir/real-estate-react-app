import React from "react";
import logo from "../assets/icons/logo.png";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const footerLinks = {
  About: ["Our Story", "Careers", "Our Teams", "Resources"],
  Support: ["FAQ", "Contact Us", "Help Center", "Terms of Services"],
  "Find Us": ["Events", "Locations", "Newsletter"],
  "Our Socials": ["Instagram", "Facebook", "Twitter"],
};

const socialIcons = {
  Instagram: <FiInstagram className="w-4 h-4" />,
  Facebook: <FiFacebook className="w-4 h-4" />,
  Twitter: <FiTwitter className="w-4 h-4" />,
};

function Footer() {
  return (
    <footer className="w-full bg-[#e5cab7] text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <img src={logo} alt="Dwello logo" className="h-8 w-auto  mb-4" />
            <p className="text-sm text-black leading-relaxed max-w-xs">
              Bringing you closer to <br />
              your dream home, one <br />
              click at a time.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-black mb-5">{category}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    {category === "Our Socials" ? (
                      <a
                        href="#"
                        className="flex items-center gap-2.5 text-sm text-black"
                        aria-label={item}
                      >
                        {socialIcons[item]}
                        {item}
                      </a>
                    ) : (
                      <a href="#" className="text-sm text-black ">
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
