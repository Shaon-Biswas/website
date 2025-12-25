import React from 'react'

function Education({course="B.Tech", institution="Sister Nivedita University", year="2021 - 2025", location="West Bengal, India"}) {
  return (
    <div className="bg-zinc-100 dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-mid w-full max-w-3xl mx-auto my-4">
        <h1 className="text-2xl font-bold text-black dark:text-white mb-2">{course}</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">{institution}</p>
        <p className="text-gray-500 dark:text-gray-400">{year}</p>
        <p className="text-gray-500 dark:text-gray-400">{location}</p>
    </div>
  )
}

export default Education