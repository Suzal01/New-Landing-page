import React from 'react';

const FifthSection = () => {
  return (
    <section className="bg-white w-full h-full  text-gray-800 py-12">
        <div className="relative bg-white py-20">
      <div className="absolute bottom-0 left-0 w-full h-16 bg-pink-100 transform top-[400px] -skew-y-2"></div>
      <div className="text-center">
        <h4 className="text-red-500 text-lg font-semibold">WHY CHOOSE US</h4>
        <h1 className="text-3xl font-bold mt-2">Our Unique Value Proposition</h1>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="text-center">
            <div className="text-red-500 text-3xl">✔</div>
            <p className="mt-2">User-friendly</p>
            <p>Our interface is designed for utmost user-friendliness and efficiency.</p>
          </div>
          <div className="text-center">
            <div className="text-red-500 text-3xl">✔</div>
            <p className="mt-2">Cross-device</p>
            <p>Connect seamlessly across various devices for a truly flexible experience.</p>
          </div>
          <div className="text-center">
            <div className="text-red-500 text-3xl">✔</div>
            <p className="mt-2">Secure Messaging</p>
            <p>Enjoy peace of mind with our secure messaging and customizable settings.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FifthSection;