import React from 'react'
import { Code, Github, Linkedin, ArrowUpRight, ArrowRight} from 'lucide-react'
import { TbBrandLeetcode } from "react-icons/tb";

function Home() {

   const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    const navbarHeight = 80; // adjust if needed

    const offsetTop = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    // setIsOpen(false); 
  };
  return (
      <div className="bg-zinc-100 flex flex-col justify-center items-center font-7xl dark:bg-[#020817] min-h-screen">
        <h1 className="flex flex-col justify-center items-center text-black text-4xl md:text-7xl font-bold dark:text-white">
          Hi, I'm 
          <span> Shaon Biswas</span>
        </h1>
        <p className="text-gray-500 text-xl max-w-2xl text-center mt-4 px-4 dark:text-gray-300">
          {/* I'am an India based Software developer & Front end developer pationate about build 
          softwear to make life easier and solving problems. */}
          A passionate programmer and web developer with strong frontend skills, while developing full-stack
          capabilities for scalable solutions.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <button
              key="Projects"
              onClick={(e) => handleScroll(e, "#projects")}
              className="bg-black dark:bg-white text-white px-6 py-2 md:px-8 md:py-3 rounded-xl font-medium text-left dark:text-black hover:bg-gray-700 dark:hover:bg-gray-400 transition-colors cursor-pointer"
            >
              View My Work
              <ArrowRight size={20} className="inline-block ml-3" />
            </button>
            <button
              key="Contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="bg-black dark:bg-white text-white px-6 py-2 md:px-8 md:py-3 rounded-xl font-medium text-left dark:text-black hover:bg-gray-700 dark:hover:bg-gray-400 transition-colors cursor-pointer"
            >
              Contact Me
              <ArrowRight size={18} className="inline-block ml-3" />
            </button>
        </div>
        <div className="flex space-x-10 mt-8 md:mt-16">
            <a href="https://www.linkedin.com/in/shaon-biswas-937138265/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-gray-500">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/Shaon-Biswas" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-gray-500">
              <Github size={18} />
            </a>
            <a href="https://leetcode.com/u/Shaon_Biswas/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-gray-500">
              <TbBrandLeetcode size={18} />
            </a>
          </div>
      </div>
  )
}

export default Home