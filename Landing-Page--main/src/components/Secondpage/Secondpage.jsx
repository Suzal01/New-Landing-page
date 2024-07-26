import React from 'react';
import './Animate.css';


const Secondpage = () => { 
    return(
      <section className=" second h-[100vh] w-[100vw]">
      <div className=" relative  w-full bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/5838215/pexels-photo-5838215.jpeg?w=1280')" }}>
      <div className="absolute inset-0 bg-black opacity-80">
      <div className="container mx-auto px-6 flex items-center">
      <div className="w-1/2">
            <p className=" absolute  left-[150px] text-lg p1 text-white font-bold">Connect with Ease</p>
            <h1 className=" absolute left-[150px] text-5xl head  text-white font-bold my-4">Revolutionize Your  <br></br> Chats With <br></br> ChattingApp</h1>
            <p className=" absolute left-[150px] text-lg p2  text-white font-bold">Experience seamless communication across all devices with advanced features</p>
            <button className=" absolute mt-4 btn1 left-[150px] bg-red-900 hover:bg-red-900 text-white font-bold py-4 px-6 rounded-full ">Get Started</button>
          </div>
          </div>
          </div>
        <div className=" absolute small w-1/2 flex justify-center items-center">
          <div className="custom-rounded overflow-hidden">
            <img src="https://dev-chating-app.pantheonsite.io/wp-content/uploads/2024/07/pexels-photo-5052880.jpeg" alt="Rounded Image" />
          </div>
        </div>
      </div>
      </section>
    );
}

export default Secondpage;
