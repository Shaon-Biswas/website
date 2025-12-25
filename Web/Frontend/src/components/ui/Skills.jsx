import React from 'react'
import c from '../logo/c.svg'
import cpp from '../logo/cpp.svg'
import java from '../logo/java.svg'
import js from '../logo/javascript.svg'
import express from '../logo/express.svg'
import git from '../logo/git.svg'
import github from '../logo/github.svg'
import html from '../logo/html.svg'
import mongodb from '../logo/mongodb.svg'
import nextjs from '../logo/next-js.svg'
import nodejs from '../logo/nodejs.svg'
import python from '../logo/python.svg'
import postgre from '../logo/postgresql.svg'
import react from '../logo/react.svg'
import tailwind from '../logo/tailwind.svg'
import typescript from '../logo/typescript.svg'
import vscode from '../logo/vs-code.svg'
import sql from '../logo/sql.svg'

function Skills({langs=[]}) {
    const iconMap ={
        'c': c,
        'c++': cpp,
        'cpp': cpp,
        'express': express,
        'express.js':express,
        'git':git,
        'github': github,
        'html': html,
        'java': java,
        'js': js,
        'javascript': js,
        'mongodb': mongodb,
        'next.js':nextjs,
        'node': nodejs,
        'node.js': nodejs,
        'postgre':postgre,
        'postgresql':postgre,
        'python': python,
        'react': react,
        'react.js': react,
        'sql': sql,
        'tailwind': tailwind,
        'tailwindcss': tailwind,
        'typescript': typescript,
        'vscode':vscode,

    };
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 mt-5">
        {
            langs.map(lang => 
                <div className="flex flex-col flex-wrap justify-center items-center p-3 m-3 gap-2 md:gap-5 w-25 h-25 md:w-40 md:h-50 rounded-xl bg-zinc-100 dark:bg-[#020817] shadow-lg border-none dark:border dark:border-gray-800" >
                    <div className='skill-icon'>
                        <img className="h-10 md:h-20 w-auto rounded-xl" src={iconMap[lang.toLowerCase()]} alt='photo'></img>
                    </div>
                    <span className="text-black dark:text-white font-bold text-sm md:text-lg">
                        {lang}
                    </span>
                </div>
            )
        }
    </div>
  )
}

export default Skills