import { useState } from "react";
import { NAV_ITEMS } from "../../constants/navMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="md:bg-nav-blue mx-auto flex h-[61px] w-full max-w-[1420px] flex-col items-center overflow-x-hidden bg-white p-2 md:mt-5 md:h-[100px] md:flex-row md:justify-between md:rounded-[40px]">
      {/* Left section: Logo */}
      <div className="ml-4 flex w-full basis-[20%] items-center justify-between md:w-1/2 md:justify-start">
        <img
          src="logo.webp"
          alt="Logo"
          className="h-[46px] w-[46px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 sm:h-[80px] sm:w-[80px]"
        />
        {/* Hamburger only on small screens */}
        <button
          className="block cursor-pointer text-black md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
            strokeWidth={3}
            stroke="currentColor"
            className="h-10 w-14"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Right section */}
      <nav className="font-odor mr-8 hidden h-[28px] w-full max-w-[1299px] items-end-safe justify-end gap-11 text-[24px] md:flex">
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
