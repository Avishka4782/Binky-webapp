import { useState } from "react";
import { NAV_ITEMS } from "../../constants/navMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="md:bg-nav-blue flex h-[61px] w-[100vw] flex-col items-center overflow-x-hidden bg-white pt-[7px] pl-[11px] md:h-16 md:max-w-[90vw] md:flex-row md:justify-between md:rounded-[40px] md:pt-0 md:pr-2 md:pb-2.5 md:pl-3 lg:h-20 lg:w-full lg:max-w-[95vw] lg:pr-6 lg:pb-1 lg:pl-4 xl:h-26 xl:rounded-[60px] xl:pt-0 xl:pr-8 xl:pb-2 xl:pl-6 2xl:h-30 2xl:pr-10 2xl:pb-1 2xl:pl-6">
      {/* Left section: Logo */}
      <div className="flex w-full items-center justify-between md:w-20 md:justify-start xl:w-20 2xl:w-30">
        <img
          src="logo.webp"
          alt="Logo"
          className="h-[46px] w-[46px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 md:h-[54px] md:w-[54px] lg:pt-[1vh] xl:h-[69px] xl:w-[69px]"
        />
        {/* Hamburger only on small screens */}
        <button
          className="block cursor-pointer text-black md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 20"
            strokeWidth={3}
            stroke="currentColor"
            className="h-10 w-14"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Right section */}
      <nav className="font-odor hidden h-[28px] w-full max-w-[1299px] justify-end text-[24px] md:flex md:h-[10px] md:gap-[2.5vw] md:text-[15px] lg:h-[24px] lg:text-[20px] xl:h-[32px] xl:gap-[2vw] xl:text-[28px]">
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
