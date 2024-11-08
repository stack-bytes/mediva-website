import logo from "../assets/logo.png";
import { navItems } from "../constants";

const navbar = () => {
  return (
    <nav className="sticky.top-0.z-50.py-3.backdrop-blur.berder-b.border-neutral-700/80">
      <div className="container relative mx-auto px-4 text-sm">
        <div className="flex items-center justify-center">
          <div className="flex flex-shrink-0 items-center">
            <img className="mr-2 h-10 w-10" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Mediva</span>
          </div>
          <ul className="ml-14 hidden space-x-12 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
