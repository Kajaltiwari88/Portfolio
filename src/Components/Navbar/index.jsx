import { Link } from "react-router-dom";
import { FaReact, FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import "./style.scss";

const Menus = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "PROJECTS",
    to: "/projects",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },

];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div>
      <nav className=" sticky flex bg-zinc-300 py-4 my-1 w-auto">
        <div className="justify-center items-center mx-3">
          <Link to={"/"} className="to-blue-800">
            <FaReact size={40} />
          </Link>
        </div>
        <ul className="large flex space-x-5 mx-auto">
          {Menus.map((items, i) => (
            <li
              key={i}
              className="font-bold text-red-600 text-2xl hover:opacity-20 hover:underline underline-offset-4 "
            >
              <Link to={items.to}>{items.label}</Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="lg:hidden cursor-pointer absolute top-5 right-3"
        >
          {showMobileMenu ? <ImCross size={40} /> : <FaBars size={40} />}
        </div>
      </nav>

      {showMobileMenu && (
        <ul className="lg:hidden sticky flex flex-col space-y-12 bg-slate-300 items-center pt-20 h-screen">
          {Menus.map((items, i) => (
            <li
              key={i}
              className="font-bold text-red-600 text-4xl cursor-pointer hover:opacity-10"
            >
              <Link
                to={items.to}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {items.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
