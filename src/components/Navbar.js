import React from 'react';

const Navbar = () => {
    return(
            <nav className="flex items-end justify-end flex-row w-screen bg-transparent p-4">
                <div className="flex md:hidden">
                    <button className="flex items-left px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="hidden w-full flex-grow md:flex md:items-center md:w-auto">
                    <div className="text-right lg:flex-grow">
                        
                            <a href="#About" className="flex mt-4 md:inline-flex md:mt-0 text-gray-300 hover:text-teal-200 mr-8">
                                About
                                </a>
                            <a href="#Home" className="flex mt-4 md:inline-flex md:mt-0 text-gray-300 hover:text-teal-200 mr-8">
                                Home
                            </a>
                            <a href="#Experience" className="flex mt-4 md:inline-flex md:mt-0 text-gray-300 hover:text-teal-200  mr-48">
                                Experience
                            </a>
                        
                    </div>
                </div>
            </nav>
    )
};

export default Navbar;