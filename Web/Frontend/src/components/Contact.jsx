import React from 'react'
import { Mail, Phone, MapPin, Send} from "lucide-react";


function Contact() {
  return (
    <div className="max-width-7xl bg-white flex flex-col justify-center items-center font-7xl py-20 px-4 dark:bg-gray-900">
      <h1 className="text-black text-3xl md:text-5xl font-bold dark:text-white">Contact Me</h1>
      <p className="text-gray-500 text-xl max-w-2xl text-center mt-4 px-4 dark:text-gray-300">
        Open to new opportunities and collaborations. Have a project in mind? Feel free to reach out.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-6">
        <div className="flex flex-col w-full justify-center md:justify-center md:flex-col gap-6">
          <h1 className="flex justify-start text-black dark:text-white text-2xl md:text-3xl font-bold">Get in Touch</h1>
          <p className="flex justify-start text-black dark:text-white">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <div className="flex flex-row gap-4 items-center border border-black dark:border-white p-4 rounded-xl">
            <div className="flex justify-center items-center rounded-full p-2 bg-gray-500 dark:bg-gray-500 text-white dark:text-black">
              <Mail size={20} />
            </div>
            <div className="flex flex-col text-black dark:text-white">
              <div className="flex flex-col text-black dark:text-white">
                Email
              </div>
              shaonbiswas900@gmail.com
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center border border-black dark:border-white p-4 rounded-xl" >
            <div className="flex justify-center items-center rounded-full p-2 bg-gray-500 dark:bg-gray-500 text-white dark:text-black" >
              <Phone size={20}/>
            </div>
            <div className="flex flex-col text-black dark:text-white">
              <div className="flex flex-col text-black dark:text-white">
                Phone
              </div>
              +91-9002575219
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center border border-black dark:border-white p-4 rounded-xl" >
            <div className="flex justify-center items-center rounded-full p-2 bg-gray-500 dark:bg-gray-500 text-white dark:text-black" >
              <MapPin size={20} />
            </div>
            
            <div className="flex flex-col text-black dark:text-white">
              <div className="flex flex-col text-black dark:text-white">
                Location
              </div>
              Kolkata, West Bengal, India.
            </div>

          </div>
          
        </div>
        <div className="flex flex-col w-full mt-10 md:mt-0 gap-2 border border-black dark:border-white p-6 rounded-xl">
          <div  className="flex justify-start text-xl font-bold text-black dark:text-white">
              Name
          </div>
          <section className="flex flex-col items-start">
            
            <input className="w-full flex items-center p-4 border border-black rounded-xl dark:border-white text-black dark:text-white" type='text' placeholder='Your name'></input>
          </section>
          <div className="flex justify-start text-xl font-bold text-black dark:text-white">
              Email
          </div>
          <section className="flex flex-col items-start">
            
            <input className=" w-full flex items-center p-4 border border-black rounded-xl dark:border-white text-black dark:text-white" type='text' placeholder='Your email'></input>
          </section>
          <div className="flex justify-start text-xl font-bold text-black dark:text-white">
              Subject
            </div>
          <section className="flex flex-col items-start">
            
            <input className=" w-full flex items-center p-4 border border-black rounded-xl dark:border-white text-black dark:text-white" type='text' placeholder='Subject'></input>
          </section>
          <div className="flex justify-start text-xl font-bold text-black dark:text-white">
              Message
          </div>
          <section className="flex flex-col items-start">
            
            <textarea className="w-full flex justify-center p-4 border border-black rounded-xl dark:border-white text-black dark:text-white" rows='8' cols='40' placeholder='Your message'></textarea>
          </section>
          <section className="flex flex-col items-start mt-4">
            <button className="w-full bg-black dark:bg-white text-white px-6 py-3 rounded-xl font-medium text-left dark:text-black hover:bg-gray-700 dark:hover:bg-gray-400 transition-colors cursor-pointer flex justify-center items-center gap-2">
              Send Message
              <div >
                <Send size={20}/>
              </div>
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact