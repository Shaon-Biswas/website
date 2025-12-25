import React from 'react'
import TechStack from './ui/TechStack'
import Photo from './myPhoto/Photo.jpeg'
import Education from './ui/Education'

function About() {
  return (
    <div className="max-width-7xl bg-white flex flex-col justify-center items-center font-7xl py-20 px-4 dark:bg-gray-900">
      <h1 className="text-black text-3xl md:text-5xl font-bold dark:text-white">About Me</h1>
      <p className="text-gray-500 text-xl max-w-2xl text-center mt-4 px-4 dark:text-gray-300">
        Get to know me and technologies I work with.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center mt-30 mb-20 gap-30">
        <img src={Photo} alt="About Me" className="w-80 h-110 rounded-xl object-cover drop-shadow-[0_0_15px_rgba(50, 50, 50,0.815)] dark:drop-shadow-[0_0_15px_rgba(183,226,229,0.815)]" />
        <div className="flex flex-col max-w-xl items-center md:items-start mt-10 md:mt-0 md:ml-10">
          <div className="text-3xl font-semibold text-black dark:text-white">
            Hi there! I'm Shaon Biswas
          </div>
          <div className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
            I'm a passionate programmer and web developer with strong frontend
            skills, while developing full-stack capabilities for scalable solutions.
            I specialise in creating responsive, accessible, and performant web
            experiences using modern technologies.
            <br></br>
            <br></br>
            My journey in web development started when I built my first website at
            the very beginning of my college. Since then, I've worked with various
            projects and ideas to bring them to life.
            <br></br>
            <br></br>
            When I'm not coding, you can find me hiking, reading adventure fiction
            books or jamming with friends.
          </div>
        </div>

      </div>
      <TechStack />
      <h1 className="text-black text-3xl md:text-5xl font-bold dark:text-white mt-20 mb-10">Education</h1>
      <div className="flex flex-col justify-center items-center w-full">
        <Education 
          course={"Bachelor of Technology in Computer Science and Engineering (CGPA of 7.82)"}
          institution={"Sister Nivedita University"}
          year={"Aug 2021 - Jul 2025"}
          location={"West Bengal, India."}
        />
        <Education 
          course={"WBCHSE XII Examination Science (Percentage: 91.2)"}
          institution={"Chakdaha Kamalpur Adarsha Vidyapith"}
          year={"Feb 2019 - Mar 2020"}
          location={"West Bengal, India."}
        />
        <Education 
          course={"WBBSE X Examination (Percentage: 87.71)"}
          institution={"Chakdaha Kamalpur Adarsha Vidyapith"}
          year={"Jan 2017 - Feb 2018"}
          location={"West Bengal, India."}
        />
      </div>
    </div>
  )
}

export default About