import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <nav className="w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <a href="#home" className='font-sans font-[500] italic text-3xl mt-4 w-auto hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 text-teal-400'>
                    &lt; JS &gt;
                </a>
              <div className="hidden md:block md:">
                <div className="ml-10 flex items-baseline space-x-4">
                <ul class="flex flex-col md:flex-row md:space-x-1 md:mt-6 md:text-md md:font-semibold">
                        <li>
                            <a href="#about" className='flex items-center text-teal-400 mr-6'>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              class="h-5 w-5" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              stroke-width="2">
                            <path 
                              stroke-linecap="round" 
                              stroke-linejoin="round" 
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                            </svg>
                            <span className='flex items-center text-white hover:text-teal-400 transition delay-100 ml-2'>About</span>
                            </a>                        
                        </li>
                        <li>
                            <a href="#experience" className='flex items-center text-teal-400'>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              class="h-5 w-5" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              stroke-width="2">
                            <path 
                              stroke-linecap="round" 
                              stroke-linejoin="round" 
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                            />
                            </svg>
                            <span className='flex items-center text-white hover:text-teal-400 hover:transition delay-100 ml-2'>Experience</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/sscobes" className='mt-1 flex items-center text-white hover:text-teal-400 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 ml-5'>
                            <svg 
                              stroke="currentColor" 
                              fill="none" stroke-width="2" 
                              viewBox="0 0 24 24" 
                              stroke-linecap="round" 
                              stroke-linejoin="round" 
                              height="1em" 
                              width="1em" 
                              xmlns="http://www.w3.org/2000/svg">
                            <path 
                              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            />
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jackscobell/" className='mt-1 flex items-center text-white hover:text-teal-400 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-100 ml-5'>
                            <svg 
                              stroke="currentColor" 
                              fill="currentColor" 
                              stroke-width="0" 
                              viewBox="0 0 448 512" 
                              height="1em" width="1em" 
                              xmlns="http://www.w3.org/2000/svg">
                            <path 
                              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                            />
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 mt-6 rounded-md text-white hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition 
          show={isOpen} 
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <ul class="flex flex-col">
                    <li>
                        <a href="#about" className='flex items-center text-teal-400 mb-2'>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          class="h-5 w-5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          stroke-width="2">
                        <path 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                        </svg>
                        <span className='flex items-center text-white hover:text-teal-400 transition delay-100 ml-2'>About</span>
                        </a>                        
                    </li>
                    <li>
                        <a href="#experience" className='flex items-center text-teal-400 mb-2'>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          class="h-5 w-5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          stroke-width="2">
                        <path 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                        </svg>
                        <span className='flex items-center text-white hover:text-teal-400 hover:transition delay-100 ml-2'>Experience</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/sscobes" className='flex items-center text-teal-400 mb-2'>
                        <svg 
                          stroke="currentColor" 
                          fill="none" 
                          stroke-width="2" 
                          viewBox="0 0 24 24" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          height="1em" 
                          width="1em" 
                          xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        />
                        </svg>
                        <span className='flex items-center text-white hover:text-teal-400 transition delay-100 ml-2'>Github</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jackscobell/" className='flex items-center text-teal-400 mb-2'>
                        <svg 
                          stroke="currentColor" 
                          fill="currentColor" 
                          stroke-width="0" 
                          viewBox="0 0 448 512" 
                          height="1em" 
                          width="1em" 
                          xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        />
                        </svg>
                        <span className='flex items-center text-white hover:text-teal-400 transition delay-100 ml-2'>Linkedin</span>
                        </a>
                    </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>
    </nav>
  )};

export default Navbar;