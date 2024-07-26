import React from 'react';


const Navbar = () => {
  return (
    <header className="bg-white w-full py-6 shadow">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-bold">ChattingApp</div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-orange-600 text-orange-600">Home</a>
            <a href="#" className="hover:text-orange-600">About</a>
            <a href="#" className="hover:text-orange-600">Services</a>
            <a href="#" className="hover:text-orange-600">Blog</a>
            <a href="#" className="hover:text-orange-600">Contact</a>
          </nav>
          <button className=" bg-red-600 text-white hover:bg-red-700 hover:text-white font-bold py-2 px-4 rounded-full ">Get Started</button>
        </div>
      </header>
      
  )
};

export default Navbar;