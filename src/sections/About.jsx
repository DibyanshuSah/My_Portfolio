import React from "react";
import profile from "../assets/Profile/Profile_Photo_new.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-3">
        About Me
      </h2>

      <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
        <img
          src={profile}
          alt="Profile"
          className="w-52 h-52 md:w-56 md:h-56 rounded-full object-cover border-4 border-green-500 shadow-[0_0_25px_#00ff00]"
        />

        <div className="space-y-4 text-lg text-gray-300 leading-relaxed md:text-left text-center">

          <p>
            I’m an aspiring{" "}
            <strong className="text-blue-400">
              AI/ML Engineer
            </strong>{" "}
            and{" "}
            <strong className="text-blue-400">
              Cyber Security Researcher
            </strong>
            , currently pursuing my B.Tech at{" "}
            <strong className="text-blue-300">
              NIT Rourkela
            </strong>.
          </p>

          <p>
            I enjoy building intelligent applications and working on
            technologies related to{" "}
            <strong className="text-blue-400">
              Machine Learning
            </strong>
            ,{" "}
            <strong className="text-blue-400">
              NLP
            </strong>
            ,{" "}
            <strong className="text-blue-400">
              Computer Vision
            </strong>
            , and{" "}
            <strong className="text-blue-400">
              Cybersecurity
            </strong>.
          </p>

          <p>
            I also have experience working with security concepts and
            vulnerability assessment using frameworks like{" "}
            <strong className="text-blue-400">
              OWASP
            </strong>.
          </p>

          <p className="text-gray-400 text-base">
            Apart from academics, I enjoy solving DSA problems,
            building projects, and exploring new technologies.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;