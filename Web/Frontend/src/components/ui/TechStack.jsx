import React from 'react'
import { useState } from 'react'
import Skills from './Skills'

function TechStack() {
    const [clickedId, setClickedId] = useState("programme");

    let handleClick = (e) => {
        setClickedId(e.target.id);
    }
  return (
    <div className="flex flex-col justify-center items-center px-4 w-full">
        <div className=" text-3xl md:text-4xl font-bold text-black dark:text-white mt-10">
            Tech Stack
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-4 mb-4 text-center max-w-2xl">
            Here are some of the technologies and tools I work with.
        </p>
        <div className="max-w-6xl w-[98%] md:w-[90%] flex flex-row md:flex-row justify-between items-center overflow-hidden bg-zinc-200 dark:bg-gray-800 my-5 rounded-xl">
            <div id='programme' className={`text-sm md:text-lg text-gray-500 py-2 flex-1 text-center cursor-pointer transition duration-300 ${clickedId==="programme" ? `bg-[#7e8892] dark:bg-black rounded-xl text-white m-1` : ``}`} onClick={handleClick} >
                Languages
            </div>
            <div id='frontend' className={`text-sm md:text-lg text-gray-500 py-2 flex-1 text-center cursor-pointer transition duration-300 ${clickedId==="frontend" ? `bg-[#7e8892] dark:bg-black rounded-xl text-white m-1`: ``}`} onClick={handleClick}>
                Frontend
            </div>
            <div id='backend' className={`text-sm md:text-lg text-gray-500 py-2 flex-1 text-center cursor-pointer transition duration-300 ${clickedId==="backend" ? `bg-[#7e8892] dark:bg-black rounded-xl text-white m-1` : ``}`} onClick={handleClick}>
                Backend
            </div>
            <div id='tools' className={`text-sm md:text-lg text-gray-500 py-2 flex-1 text-center cursor-pointer transition duration-300 ${clickedId==="tools" ? `bg-[#7e8892] dark:bg-black rounded-xl text-white m-1` : ``}`} onClick={handleClick}>
                Tools
            </div>
        </div>
        <div className="width-full flex justify-center items-center mt-6">
            {
                clickedId==="programme"? (
                <Skills langs={["C","C++","Java","JavaScript","Python"]} />
                ): 
                clickedId==="frontend"? (
                <Skills langs={["HTML","Tailwind","Typescript","React.js"]} />
                ):
                clickedId==="backend"? ( 
                <Skills langs={["Node.js","PostgreSQL","MongoDB"]} />
                ):
                clickedId==="tools"? (
                <Skills langs={["VsCode","Git","GitHub"]} />
                ): 
                <div></div>
            }
        </div>
    </div>
  )
}

export default TechStack