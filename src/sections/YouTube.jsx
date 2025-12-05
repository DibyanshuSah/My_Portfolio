import React from "react";
import ytLogo from "../assets/youtube/logo.png"; // Your JEE Competitors circular logo

const YouTube = () => {
  return (
    <section id="youtube" className="py-20 px-6 max-w-6xl mx-auto text-white">

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center">
        YouTube Channel
      </h2>

      {/* Blue Underline (Centered) */}
      <div className="w-32 h-1 bg-blue-500 mx-auto mt-2 mb-12 rounded-full"></div>

      {/* Card */}
      <div
        className="
          bg-[#111827] p-6 rounded-xl shadow-lg
          border border-blue-500
          hover:border-blue-400
          transition-all duration-300
          hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
        "
      >

        {/* Top Row: Logo + Title */}
        <div className="flex items-center gap-4 mb-3">
          <img
            src={ytLogo}
            alt="Channel Logo"
            className="w-14 h-14 rounded-full border border-gray-600"
          />

          <div>
            <h3 className="text-2xl font-semibold text-blue-300">
              JEE Competitors
            </h3>
          </div>
        </div>

        {/* Stats */}
        <p className="text-gray-400 mb-4">
          335+ subscribers • 22+ videos
        </p>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          <strong className="text-blue-300">Founder & Educator – JEE Competitors</strong><br />
          Established the JEE Competitors YouTube channel, mentoring
          <strong> 350+ aspirants </strong> through targeted curriculum development 
          and results-driven exam strategies while providing high-quality conceptual learning.
        </p>

        {/* Button */}
        <a
          href="https://www.youtube.com/@JEEBRAINS-jh4i"
          target="_blank"
          className="
            inline-block px-6 py-3 rounded-lg 
            bg-green-600 hover:bg-green-700
            text-white font-semibold
            transition-all duration-200
          "
        >
          Visit Channel
        </a>
      </div>
    </section>
  );
};

export default YouTube;
