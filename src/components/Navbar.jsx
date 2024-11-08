import logo from "../assets/logo.png";
import { navItems } from "../constants";

const navbar = () => {
  return (
    <nav className="berder-b sticky top-0 z-50 border-neutral-100 py-3 backdrop-blur">
      <div className="container relative mx-auto px-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img className="mr-2 h-10 w-10 rounded-md" src={logo} alt="logo" />
            <span className="bg-gradient-to-r from-red-700 to-red-300 bg-clip-text text-xl tracking-tight text-transparent">
              Mediva
            </span>
          </div>
          <ul className="ml-14 mr-2 hidden space-x-12 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="rounded-md border border-red-900 px-3 py-2 hover:bg-red-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
