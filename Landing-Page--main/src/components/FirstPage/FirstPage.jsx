import React from 'react';


const Navbar = () => {
  return (
    <header className="bg-white w-[100vw] py-6 shadow-lg ">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-bold">Chatit</div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-orange-600 text-orange-600 font-semibold">Home</a>
            <a href="#" className="hover:text-orange-600 font-semibold">About</a>
            <a href="#" className="hover:text-orange-600 font-semibold">Services</a>
            <a href="#" className="hover:text-orange-600 font-semibold">Blog</a>
            <a href="#" className="hover:text-orange-600 font-semibold">Contact</a>
          </nav>
          <button className="relative right-40 bg-red-600 text-white hover:bg-red-700 hover:text-white font-bold py-2 px-4 rounded-full animate-pulse">Get Started</button>
        </div>
      </header>
      
  )
};

export default Navbar;