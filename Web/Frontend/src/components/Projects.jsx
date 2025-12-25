import React from 'react'
import Project from './ui/Project'

function Projects() {
  return (
    <div className="max-width-7xl bg-zinc-100 flex flex-col justify-center items-center font-7xl py-20 px-4 dark:bg-[#020817]">
      <h1 className="text-black text-3xl md:text-5xl font-bold dark:text-white">Projects</h1>
      <p className="text-gray-500 text-xl max-w-2xl text-center mt-4 px-4 dark:text-gray-300">
        A selection of projects I've worked on recently.
      </p>
      <div className="flex flex-row flex-wrap max-w-7xl justify-center items-center mt-10">
        <Project
          name ='Portfolio'
          details='
            Designed and implemented a total portfolio website
            using HTML, CSS, and Javascript.
            Used the React.js framework to make components reusable
            and easy to understand. And also help me to showcase all about me.'
          langs={['HTML','CSS','JS','React.js']}
          project_link=''
        />
        <Project
          name='Fake Video Detection '
          details='
            Applied CNN for frame-wise spatial feature 
            extraction.
            Used RNN to process sequential data and applied 
            sigmoid function for Binary classification.'
          langs={['Python','CNN','RNN']}
          project_link=''
        />
        <Project
          name='Snake and Ladder Game'
          details='
            Designed and implemented the game logic using 
            HTML, CSS and JavaScript.
            Used data structures for efficient management of 
            game elements like snakes, ladders and players 
            positions.'
          langs={['HTML','CSS','JS','React']}
          project_link='https://github.com/Shaon-Biswas/Snake_Ladder_Game_using_HTML_CSS_JS'
        />
        <Project
          name='Sorting Visualiser'
          details='
            It is crafted to provide an immersive 
            understanding of the inner workings of sorting 
            algorithms.
            It is purely written in C++, utilising graphics. h to 
            Visualise the data swapping process.'
          langs={['C++','DSA']}
          project_link='https://github.com/Shaon-Biswas/VisualSorting'
        />
        <Project
          name='Snake and Ladder Game'
          details='
            Designed and implemented the game logic using object-orientated programming 
            principles in C++.
            Used data structures for efficient management of game elements like 
            snakes, ladders, and player positions.'
          langs={['C++','OOPs','DSA']}
          project_link='https://github.com/Shaon-Biswas/Snake_ladder_game'
        />
      </div>
    </div>
  )
}

export default Projects