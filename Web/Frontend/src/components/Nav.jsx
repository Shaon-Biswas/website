import React from 'react'
import { useState } from 'react'
import {Sun, Moon, Menu, X} from 'lucide-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const links = [
        {name: 'Home', href: '#home'},
        {name: 'About', href: '#about'},
        {name: 'Projects', href: '#projects'},
        {name: 'Contact', href: '#contact'},
        {name: 'Profiles', href: '#profiles'},
    ];
    
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        document.documentElement.classList.toggle('dark');
    }
  return (
    <>
        <nav className={`fixed w-full z-10 top-0 left-0 bg-white dark:bg-gray-800 shadow-md`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 text-2xl font-bold text-gray-900 dark:text-white">Shaon</div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {links.map((link) => (
                                <a key={link.name} href={link.href} className="text-black dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">{link.name}</a>
                            ))}
                            <button onClick={toggleDarkMode} className=" items-center ml-4 p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                                {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md items-center text-gray-500 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex flex-row justify-between px-4 pb-4">
                <button onClick={toggleDarkMode} className=" md:hidden sm:px-3 mt-2 p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-left">
                        {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
                </button>
                {isOpen && (
                    <div className={`md:hidden transition-all overflow-hidden ${
                        isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                        }`}>
                        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((link) => (
                                <a key={link.name} href={link.href} className="block text-black dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium">{link.name}</a>
                            ))}
                            
                        </div>
                    </div>
                )}
            </div>
        </nav>
    
    </>
  )
}

export default Navbar