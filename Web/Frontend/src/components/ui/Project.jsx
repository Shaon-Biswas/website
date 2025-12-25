import { Github } from 'lucide-react'
import React from 'react'

function Project({name, details, langs=[], project_link="#"}) {
  return (
    <div className="bg-zinc-100 dark:bg-gray-900 rounded-xl shadow-md dark:shadow-mid w-full max-w-sm mx-auto my-4 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt={name} className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 ease-out hover:scale-110"/>
        <div className="flex flex-col p-6">
            <div className="text-2xl  text-black dark:text-white mb-2">{name}</div>
            <p className="text-gray-700 dark:text-gray-500 text-md mb-4">{details}</p>
        </div>
        <div className="flex flex-wrap mb-4 px-6">
            {langs.map((lang, index) => (
                <span key={index} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium mr-2 mb-2 px-4 py-1 rounded-md">
                    {lang}
                </span>
            ))}
        </div>
        <div className="px-6 pb-6">
            <a href={project_link} target="_blank" rel="noopener noreferrer" className="text-white dark:text-black px-4 py-1 rounded-md bg-black dark:bg-white transition duration-300 inline-block">
                <Github size={20} className="inline-block mr-3" />
                Code
            </a>
        </div>
    </div>
  )
}

export default Project