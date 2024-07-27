
import React from 'react';

const ThirdSection = () => {
  return (
    <section className=" third bg-white w-[100vw] h-[100vh] text-gray-800 font-quicksand">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="relative text-red-500 left-10 text-sm uppercase mb-2">Our Story</h2>
            <h1 className="relative left-10 text-4xl font-bold mb-4">Behind The Innovation <br /> Of Chatit</h1>
          </div>
          <div className="lg:w-1/2">
            <p>Chatit is a cutting-edge chat application designed for intuitive communication in the digital age. Founded by tech-savvy entrepreneurs, it aims to revolutionize online interactions.</p>
            <p>Founded by tech-savvy entrepreneurs, Chatit is set to change the way people interact online.</p>
            <button className="mt-4 bg-red-600 text-white py-2 px-6 rounded transition-colors duration-300 hover:bg-red-700">Read More</button>
          </div>
        </div>
      </div>
      <div>
          <img src="https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-6146955.jpeg" alt="ChattinApp" className=" big absolute rounded-lg w-[1400px] h-[400px] top-[1500px] left-[60px] object-cover" />
        </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-pink-100 transform top-[750px] -skew-y-2"></div>
    </section>
  );
}

export default ThirdSection;