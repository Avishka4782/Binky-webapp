import { useState } from "react";
import { NAV_ITEMS } from "../../constants/navMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="md:bg-nav-blue mx-auto mt-5 flex w-full max-w-[1320px] flex-col items-center rounded-[40px] bg-white p-4 md:mt-5 md:h-[95px] md:flex-row md:justify-between">
      {/* Left section: Logo */}
      <div className="flex w-full basis-[20%] items-center justify-between md:w-1/2 md:justify-start">
        <img
          src="logo.webp"
          alt="Logo"
          className="h-[60px] w-[60px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
        />
        {/* Hamburger only on small screens */}
        <button
          className="block cursor-pointer text-black md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="h-9 w-9"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Right section */}
      <nav className="font-odor mr-8 hidden h-[26px] w-full max-w-[1299px] items-end-safe justify-end gap-11 text-xl md:flex">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="text-black transition-colors duration-300 hover:text-amber-50"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/*Mobile menu - dropdown*/}
      {isMenuOpen && (
        <nav className="bg-nav-blue/50 absolute mt-15 flex w-full flex-col items-center rounded-2xl transition-colors duration-300 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="font-odor flex w-full justify-center px-4 text-black transition-colors duration-300 hover:bg-black/70 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
