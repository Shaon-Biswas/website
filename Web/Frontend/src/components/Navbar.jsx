import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    // { name: "Profiles", href: "#profiles" },
  ];

  // Apply dark mode on load
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  // Smooth scroll with offset for fixed navbar
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    const navbarHeight = 80; // adjust if needed

    const offsetTop = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    setIsOpen(false); // close mobile menu
  };


  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-[#020817] backdrop-blur-md shadow-md z-50 transition-all">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

        {/* LEFT SIDE -> YOUR NAME */}
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Shaon
        </h1>

        {/* RIGHT SIDE DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-black font-medium dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}

          {/* Dark/Light Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer fucas:bg-gray-500 p-2 rounded-xl active:bg-gray-500">
            {darkMode ? (
              <Sun size={15} className="text-gray-700 dark:text-white" />
            ) : (
              <Moon size={15} className="text-gray-700 dark:text-white" />
            )}
          </button>
        </div>


        {/* RIGHT SIDE MOBILE BUTTONS */}
        <div className="md:hidden flex items-center gap-4">

          {/* Dark/Light Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="cursor-pointer fucas:bg-gray-500 p-2 rounded-xl active:bg-gray-500">
            {darkMode ? (
              <Sun size={15} className="text-gray-700 dark:text-white" />
            ) : (
              <Moon size={15} className="text-gray-700 dark:text-white" />
            )}
          </button>

          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white cursor-pointer">
            {isOpen ? <X size={20} className="border border-black rounded dark:border-gray-500"/> : <Menu size={20} />}
          </button>
        </div>
      </div>


      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden transition-all overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-black px-6 py-4 flex flex-col gap-5">

          {links.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-black font-medium text-left dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}

        </div>
      </div>
    </nav>
  );
}