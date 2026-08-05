import logo from "../../assets/icons/logo.png";
import { useState } from "react";
import { FiUser, FiSearch, FiX, FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="ml-5">
      <div className="flex  items-center justify-center gap-5 m-5 sm:p-5  md:m-2  lg:m-5 p-2 ">
        <div className=" md:gap-50 shrink-0">
          <img
            src={logo}
            alt=""
            className=" w-40 h-auto sm:mr-30 md:mr-30 lg:w-30 lg:mr-70 "
          />
        </div>
        <div className="hidden md:flex items-center gap-8 justify-center md:mr-20 lg:text-sm ">
          <div>Home</div>
          <div>Service</div>
          <div>Agents</div>
          <div>Contact</div>
        </div>
        <div className="flex items-center gap-3 md:mr-5">
          <FiSearch
            className="h-5 w-5 cursor-pointer text-black "
            aria-label="Search"
          />
          <FiUser
            className="h-5 w-5 cursor-pointer text-black "
            aria-label="Profile"
          />
        </div>

        <button className="bg-black p-3 rounded-sm p- text-white font-semibold">
          sign up
        </button>
        <button
          className="md:hidden flex   items-center justify-center rounded-full  text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </section>
  );
}

export default Nav;
