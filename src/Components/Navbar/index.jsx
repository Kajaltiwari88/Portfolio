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
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (to) => {
    setShowMobileMenu(false);
    setSelectedMenu(to);
  };

  return (
    <div>
      <nav className="sticky  flex bg-zinc-300 py-8 my-1 w-auto">
        <div className=" flex justify-center items-center mx-auto">
          <Link to={"/"} className="to-blue-800 absolute left-1">
            <FaReact size={40} />
          </Link>
          <ul className=" large flex space-x-5 mx-auto ">
            {Menus.map((item, i) => (
              <li
                key={i}
                className={`font-bold text-red-600 text-2xl hover:opacity-20 hover:underline underline-offset-4 `
                 
               }
              >
                <Link to={item.to} onClick={() => setSelectedMenu(item.to)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden cursor-pointer absolute right-2 "
          >
            {showMobileMenu ? <ImCross size={40} /> : <FaBars size={40} />}
          </div>
        </div>
      </nav>

      {showMobileMenu && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-20 flex flex-col items-center justify-center bg-slate-300">
          <div className="flex justify-end w-full p-4">
            <ImCross
              size={30}
              className="cursor-pointer"
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center space-y-6">
            {Menus.map((item, i) => (
              <li
                key={i}
                className={`font-bold text-red-600 text-4xl cursor-pointer hover:opacity-10 ${
                  selectedMenu === item.to ? "opacity-20" : ""
                }`}
              >
                <Link
                  to={item.to}
                  onClick={() => handleMenuClick(item.to)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
