import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-center border-b border-neutral-400/80 py-3 backdrop-blur-lg">
      <div className="container relative pl-5 pr-4 lg:text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center lg:mr-10">
            <img className="mr-2 h-10 w-10" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight sm:text-sm lg:text-xl">
              Mediva
              <span className="text-sm font-thin tracking-tight sm:text-sm lg:text-xl">
                {" "}
                by StackBytes
              </span>
            </span>
          </div>
          <ul className="ml-14 hidden space-x-12 lg:ml-10 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => item.clicked()}
                  className={`rounded-md ${item.button ? "border border-red-500 transition-all hover:bg-red-400" : ""} px-3 py-2`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex-col justify-end md:flex lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 flex w-full flex-col items-center justify-center bg-neutral-100 p-12 lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="mb-5 mt-5 text-center">
                  <a
                    href={item.href}
                    className={`rounded-md ${item.button ? "border border-red-500 transition-all hover:bg-red-400" : ""} px-3 py-2`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
