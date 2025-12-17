import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="pt-24 pb-10 flex flex-col justify-center items-center text-center px-6 text-white">

      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Hi, I am <span className="text-blue-400">Dibyanshu Sah</span>
      </h2>

      <h3 className="text-2xl md:text-3xl text-blue-300 font-semibold mb-6 h-10">
        <Typewriter
          words={[
            "AI/ML Engineer",
            "Cyber Security Researcher",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1000}
        />
      </h3>

      <p className="max-w-3xl text-gray-300 text-lg leading-relaxed mb-8">
        Building intelligent systems across Machine Learning, NLP, Computer Vision
        & Cybersecurity with a passion for impactful innovation.
      </p>

      {/* Direct Download CV */}
      <a
        href="https://drive.google.com/uc?export=download&id=1udo5txK8ddlG7jGM2PTsp7IGDPukrxN4"
        className="
          bg-blue-600 px-7 py-3 rounded-lg font-semibold
          hover:bg-blue-500 transition
        "
      >
        Download CV
      </a>

    </section>
  );
};

export default Hero;
