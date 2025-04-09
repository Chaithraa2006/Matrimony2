
import React from "react";

const Services = () => {
  return (
    <div className="bg-darkred min-h-screen flex items-center justify-center">
      <div className="flex gap-8">
        {/* LV Elite Card */}
        <div className="bg-black text-white p-6 rounded-2xl shadow-lg w-96 border-2 border-gray-700">
          <div className="text-center text-gold text-3xl font-bold mb-4">LV <span className="italic">Elite</span></div>
          <p className="text-center text-lg">Exclusive matchmaking service for the elite</p>
          <div className="flex justify-center mt-4">
            <button className="border-2 border-pink-500 px-6 py-2 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition">
              Know More
            </button>
          </div>
        </div>

        {/* LV Vivah Card */}
        <div className="bg-black text-white p-6 rounded-2xl shadow-lg w-96 border-2 border-gray-700">
          <div className="text-center text-gold text-3xl font-bold mb-4">LV <span className="italic">Vivah</span></div>
          <p className="text-center text-lg">
            LoveVivah <span className="text-yellow-500 font-bold">GUARANTEES</span> to get you a match within 18 months or <span className="text-pink-500 font-bold">100% money back*</span>
          </p>
          <div className="flex justify-center mt-4">
            <button className="border-2 border-pink-500 px-6 py-2 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
