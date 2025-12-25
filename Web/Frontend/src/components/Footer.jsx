import { Code, Github, Linkedin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandLeetcode } from "react-icons/tb";

function Footer() {
  return (
      <div className="bg-white text-black dark:bg-[#020817] dark:text-white backdrop-blur-md border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:items-start md:flex-col items-center gap-4">
            <a href="/" className="text-lg font-bold hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              Portfolio
            </a>
            <p>© {new Date().getFullYear()} Shaon Biswas. All rights reserved.</p>

          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/shaon-biswas-937138265/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <Linkedin size={15} />
            </a>
            <a href="https://github.com/Shaon-Biswas" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <Github size={15} />
            </a>
            <a href="https://leetcode.com/u/Shaon_Biswas/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <TbBrandLeetcode size={15} />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Footer